import React from 'react'
import { signOut } from '@/auth'

const SignOut = () => {
  return (
    <form action={async () => {
        "use server"
        await signOut()
    }}>
        <button>
            Sign out
        </button>
    </form>
  )
}

export default SignOut