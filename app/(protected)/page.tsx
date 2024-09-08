import SignOut from "@/components/sign-out"
import { auth } from "@/auth"
import ToggleTheme from "@/components/theme-toggle"

export default async function Home() {

  const session = await auth()
  return (
    <div>
      <ToggleTheme/>
      <SignOut/>
      {JSON.stringify(session)}
    </div>
  )
}
