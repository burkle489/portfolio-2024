import { Store, configureStore } from "@reduxjs/toolkit"

import cookieReducer from "./acceptedCookies"
import gradientReducer from "./gradientSlice"
import menuReducer from "./menuSlice"
import portalReducer from "./portalSlice"
import gradientReadyReducer from "./gradientReady"

export const store: Store = configureStore({
  reducer: {
    portal: portalReducer,
    cookies: cookieReducer,
    menu: menuReducer,
    gradient: gradientReducer,
    gradientReady: gradientReadyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: [
          `payload.0`,
          `payload.1`,
          `payload.2`,
          `payload.3`,
        ],
        ignoredPaths: [`gradient`],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
