import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

export const registerSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
})

export const currencySchema = z.object({
    currency: z.string()
})