import React from 'react'
import { CircleCheck } from 'lucide-react'

const SuccessForm = ({message} : {message:string}) => {
  return (
    <div className='w-full bg-green-100 flex p-2 rounded-lg gap-5 item-center'>
        <CircleCheck className="text-green-500" size={20}/>
        <h1 className=" text-green-500 text-[14px] w-full">
            {message}
        </h1>
    </div>
  )
}

export default SuccessForm