'use client'

import { useTransition,useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from "@/schemas"
import { z } from 'zod'

import { Button } from "../ui/button"

import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
 } from '@/components/ui/form'
import { Input } from "../ui/input"
import { register } from "@/actions/register"

import ErrorForm from "../error-form"
import SuccessForm from "../success-form"

const SignUpForm = () => {

  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  const [isPending, startTransition] = useTransition()

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    setError('')
    setSuccess('')
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error)
        setSuccess(data.success)
      })
    }) 
  }

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues:{
          username:'',
          email: '',
          password: ''
        }
      })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-[250px] self-center mt-10">
        <div className="space-y-4">
        <FormField control={form.control} name="username" render={({ field }) => (
            <FormItem>
              <FormLabel>
                Username
              </FormLabel>
              <FormControl>
                <Input {...field} placeholder="Lorenz" type='text' disabled={isPending}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}/>
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
          Register
        </Button>
        {error && (
          <ErrorForm message={error}/>
        )}
        {success && (
          <SuccessForm message={success}/>
        )}
      </form>
    </Form>
  )
}

export default SignUpForm