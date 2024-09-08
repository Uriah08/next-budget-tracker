'use client'

import { useTransition, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from "@/schemas"
import { z } from 'zod'

import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
 } from '@/components/ui/form'
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { login } from "@/actions/login"
import ErrorForm from "../error-form"

const SignInForm = () => {

  const [error, setError] = useState<string | undefined>(undefined)

  const [isPending, startTransition] = useTransition()

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    setError('')
    startTransition(async () => {
      login(values).then((data) => {
        setError(data?.error)
      })
    })
  }

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues:{
      email: '',
      password: ''
    }
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-[250px] self-center mt-10">
        <div className="space-y-4">
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email
              </FormLabel>
              <FormControl>
                <Input {...field} placeholder="example@gmail.com" type='email' disabled={isPending}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}/>
          <FormField control={form.control} name="password" render={({ field }) => (
            <FormItem>
              <FormLabel>
                Password
              </FormLabel>
              <FormControl>
                <Input {...field} placeholder="**********"  type="password" disabled={isPending}/>
              </FormControl>
            </FormItem>
          )}/>
        </div>
        <Button type='submit' className="w-full" disabled={isPending}>
          Login
        </Button>
        {error && (
          <ErrorForm message={error}/>
        )}
      </form>
    </Form>
  )
}

export default SignInForm