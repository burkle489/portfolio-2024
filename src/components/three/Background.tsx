"use client"

import { FC, useRef } from "react"
import * as THREE from "three"
import { Plane } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { cnoise21 } from "../../modules/glsl/noise"
import { update } from "@tweenjs/tween.js"
import useWindowSize from "@/hooks/useWindowSize"

export const Background: FC = () => {
  const planeRef = useRef(null)

  const {
    mouse,
    // viewport: { width, height },
  } = useThree()
  const { width, height } = useWindowSize()

  const shader = {
    uniforms: {
      u_time: { value: 0 },
      u_mouse: { value: new THREE.Vector2() },
    },
    vertexShader,
    fragmentShader,
  }

  const target = new THREE.Vector2()
  useFrame(({}) => {
    shader.uniforms.u_time.value += 0.005
    target.set((mouse.x * 0.5 + 1) * 0.5, (mouse.y * 0.5 + 1) * 0.5)
    shader.uniforms.u_mouse.value.lerp(target, 0.01)
  })

  return (
    <Plane ref={planeRef} args={[width, height, width / 2, height / 2]}>
      <shaderMaterial args={[shader]} />
    </Plane>
  )
}

const vertexShader = `
varying vec2 v_uv;

void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 0.6 );
}
`

const fragmentShader = `
uniform float u_time;
uniform vec2 u_mouse;
varying vec2 v_uv;

${cnoise21}

float random(vec2 p) {
  vec2 k1 = vec2(
    23.14069263277926, // e^pi (Gelfond's constant)
    2.665144142690225 // 2^sqrt(2) (Gelfond–Schneider constant)
  );
  return fract(
    cos(dot(p, k1)) * 12345.6789
  );
}

const vec3 black = vec3(0.03921,0.01568,0.14117);
const vec3 color1 = vec3(0.30588, 0.1372, 0.9686);
const vec3 color2 = vec3(0.1921,0.4666,0.9412);
const vec3 color3 = vec3(0.3686,0.7490,0.5961);

void main() {
  vec2 seed = v_uv * 1.5 * (u_mouse + 0.3 * (length(u_mouse) + 0.5));
  float n = cnoise21(seed) + length(u_mouse) * 0.9;

  float ml = pow(length(u_mouse), 2.5) * 0.45;
  float n1 = smoothstep(-0.2, 0.0 + 0.5, n);
  vec3 color = mix(black, color1, n1);
  
  float n2 = smoothstep(0.1 + ml, 0.1 + ml + 0.2, n);
  color = mix(color, color2, n2);

  float n3 = smoothstep(0.0 + ml, 0.2 + ml + 0.2, n);
  color = mix(color, color3, n3);

  float n4 = smoothstep(0.3 + ml, 0.3 + ml + 0.2, n);
  color = mix(color, black, n4);

  vec2 uvrandom = v_uv;
  uvrandom.y *= random(vec2(uvrandom.y, 0.7));
  color.rgb += random(uvrandom) * 0.075;

  gl_FragColor = vec4(color, 1.0);
}
`
