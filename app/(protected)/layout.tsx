
import React, { ReactNode } from 'react'
import Image from 'next/image'
import ToggleTheme from '@/components/theme-toggle'
import Navigation from '@/components/nav-link'
import Profile from '@/components/profile'
import { auth } from '@/auth'

const HomeLayout = async ({children}:{children: ReactNode}) => {
    const session = await auth()
  return (
    <div className='flex h-full bg-theme'>
        <div className='h-full bg-theme py-10 px-3 lg:px-20 flex flex-col justify-between '>
            <div className='flex flex-col'>
            <div className='flex items-center'>
                <Image src={'/logo.png'} width={50} height={50} alt='logo'/>
                <h1 className='text-2xl font-semibold text-dark dark:text-light lg:block hidden'>Finince</h1>
            </div>
                <Navigation/>
            </div>
            <div className='flex flex-col gap-5'>
            <ToggleTheme/>
            <Profile image={session?.user?.image || '/image.png'} name={session?.user?.name || ''}/>
            </div>
        </div>
        {children}
    </div>
  )
}

export default HomeLayout