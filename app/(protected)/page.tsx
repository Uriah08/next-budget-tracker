import { auth } from "@/auth"


export default async function Home() {
  const session = await auth()
  if(!session) {
    return
  }
  return (
    <div className="h-full w-full bg-theme-follow flex flex-col p-3">
      <h1 className="text-3xl sm:text-4xl fg-theme-max font-semibold text-center my-5">Dashboard</h1>
      <div className="w-full bg-theme rounded-xl flex flex-col p-3">
        <h1 className="fg-theme-max font-semibold sm:text-2xl">Welcome back, <span className="text-purple-400">{session.user?.name}!</span></h1>
        <div className="self-end fg-theme-max gap-4 flex">
        </div>
      </div>
    </div>
  )
}
