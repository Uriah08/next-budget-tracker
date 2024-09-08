import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"

import { loginSchema } from "./schemas"
import { getUserByEmail } from "./lib/user"

import bycryptjs from 'bcryptjs'
 
// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = loginSchema.safeParse(credentials)

        if(validatedFields.success) {
          const { email, password } = validatedFields.data

          const user = await getUserByEmail(email)
          if(!user || !user.password) {
            return null
          }

          const passwordMatch = await bycryptjs.compare(
            password,
            user.password
          )

          if(passwordMatch) {
            return user
          }
          
          return null
        }
      }
    })
  ],
} satisfies NextAuthConfig