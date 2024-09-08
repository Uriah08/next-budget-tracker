import { TriangleAlert } from "lucide-react"

const ErrorForm = ({ message } : { message : string}) => {
  return (
    <div className='w-full bg-destructive/15 flex p-2 rounded-lg gap-5 item-center'>
        <TriangleAlert className="text-destructive/85" size={20}/>
        <h1 className="text-destructive/85 text-[14px]">
            {message}
        </h1>
    </div>
  )
}

export default ErrorForm