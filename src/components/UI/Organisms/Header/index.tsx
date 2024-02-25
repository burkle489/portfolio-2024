import Link from "next/link"
import { FC } from "react"
// import LogoutButton from "../Buttons/LogoutButton"
// import { getServerSession } from "next-auth"
// import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

const Header: FC<IHeaderProps> = async () => {
  // const session = await getServerSession(authOptions)
  return (
    <header className="bg-white border-b py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between px-6">
        <div className="flex gap-6 items-center">
          <Link
            href={"/"}
            className="flex items-center gap-2 text-blue-500 text-lg"
          >
            <FontAwesomeIcon icon={faLink} className="text-blue-500" />
            <span className="font-bold">Presence</span>
          </Link>
          <nav className={"flex items-center gap-4 text-slate-500 text-sm"}>
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>
        <nav className={"flex items-center gap-4 text-sm text-slate-500"}>
          {/* {!!session && (
            <>
              <Link href={"/account"}>Hello, {session?.user?.name}</Link>
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
              <Link href={"/login"}>Sign In</Link>
              <Link href={"/login"}>Create Account</Link>
            </>
          )} */}
        </nav>
      </div>
    </header>
  )
}

export default Header
