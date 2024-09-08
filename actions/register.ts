"use server"

import { registerSchema } from "@/schemas";
import { z } from 'zod'

import bcryptjs from 'bcryptjs'
import { db } from '@/lib/db'

import { getUserByEmail } from "@/lib/user";

export const register = async (values: z.infer<typeof registerSchema>) => {
    
    const validatedFields = registerSchema.safeParse(values)

    if(!validatedFields.success) {
        return { error: "Invalid Fields"}
    }

    const { username, password, email } =  validatedFields.data
    const hashedPassword = await bcryptjs.hash(password,10)

    const emailExist = await getUserByEmail(email)

    if (emailExist){
        return { error: 'Email is taken'}
    }

    await db.user.create({
        data: {
            name: username,
            email,
            password: hashedPassword
        }
    })

    return { success: "Successfully Registered" }
}