import React from 'react'
import { auth } from '@/auth'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CurrencyBox } from '@/components/currency-box'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const StartUp = async () => {
    const session = await auth()
  return (
    <div className='relative h-full w-full bg-theme flex justify-center'>
        <div className='lg:w-[50%] flex flex-col justify-center items-center px-2'>
            <div className='flex items-center'>
                <Image src={'/logo.png'} width={80} height={80} alt='logo'/>
                <h1 className='text-4xl fg-theme font-semibold'>Finince</h1>
            </div>
            <h1 className='sm:text-3xl fg-theme font-semibold mt-20 text-center text-2xl lg:w-[70%]'>Welcome, <span className='text-purple-400'>{session?.user?.name}</span>!</h1>
            <h1 className='fg-theme text-[14px] sm:text-[16px] text-center'>Your Ultimate Budget Tracker and Financial Companion!</h1>

            <Card className='w-full lg:w-[70%] bg-theme mt-10'>
                <CardHeader>
                    <CardTitle>Currency</CardTitle>
                    <CardDescription>
                        Set the default currency.
                    </CardDescription>
                </CardHeader>
                <CardContent className='flex items-center gap-2'>
                    <p className='fg-theme text-[12px]'>Choose Currency</p>
                    <CurrencyBox/>
                </CardContent>
            </Card>
            <Button className='w-full lg:w-[70%] mt-5 bg-purple-400 hover:bg-purple-300'>
                <Link href={'/'}>Go to Dashboard</Link>
            </Button>
        </div>
        <div className='hidden lg:block lg:w-[50%]'>
            {/*eslint-disable-next-line @next/next/no-img-element */}
            <img src={'/wallpaper.gif'} alt='wallpaper' className='w-full h-full object-cover'/>
        </div>
    </div>
  )
}

export default StartUp