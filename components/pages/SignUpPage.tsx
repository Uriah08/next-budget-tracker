import React from 'react'
import Image from 'next/image'
import SignIn from '../sign-in'
import SignUpForm from './SignUpForm'
import Link from 'next/link'

const SignUpPage = () => {
  return (
    <div className='shadow-lg px-10 py-3 flex flex-col h-fit sm:rounded-xl w-full sm:w-fit border-t-4 border-slate-600'>
      <div className='flex gap-5 items-center justify-center mt-5'>
        <Image src={'/logo.png'} width={50} height={50} alt='logo'/>
        <h1 className='font-semibold text-[23px]'>Finince</h1>
      </div>
      <h1 className='font-bold text-3xl mt-2 self-center'>Sign Up</h1>
      <SignUpForm/>
      <p className='mt-3 self-center text-slate-400 text-[15px]'>or</p>
      <SignIn/>
      <Link href={'/auth/login'} className='hover:underline self-center text-[12px] my-3'>
        Already have an account?
      </Link>
    </div>
  )
}

export default SignUpPage