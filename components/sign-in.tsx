import React from 'react'
import { signIn } from '@/auth'
import Image from 'next/image'

const SignIn = () => {
  return (
    <form action={async () => {
        "use server"
        await signIn('google')
    }} className='self-center'>
        <button className='bg-blue-500 flex p-1 gap-5 items-center mt-3 disabled:bg-blue-400 hover:bg-blue-600'>
            <Image src={'/google.png'} width={50} height={50} alt='google logo'/>
            <span className='mr-5 text-white'>Sign In with Google</span>
        </button>
    </form>
  )
}

export default SignIn