import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Profile = ({image, name}: {image: string,name:string}) => {
  return (
    <Link href={'/profile'} className='flex items-center gap-3 justify-center'>
        <Image src={image} width={30} height={30} alt='image' className='rounded-full'/>
        <h1 className='fg-theme lg:block hidden'>{name}</h1>
    </Link>
  )
}

export default Profile