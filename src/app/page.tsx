import {
  RegisterLink,
  LoginLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
const page = () => {
  return (
    <div className='h-screen bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 flex justify-center items-center'>
      <div className='bg-white w-[400px] p-5 border-2 border-gray-500 rounded-md shadow-md flex flex-wrap gap-5'>
        <div className='w-full'>
          <h1>Autenticacion</h1>
        </div>
        <div className='w-full flex justify-center gap-2'>
          <LoginLink className='border-2 border-gray-500 rounded-md bg-slate-500 p-2'>Sign in</LoginLink>

          <RegisterLink className='border-2 border-gray-500 rounded-md bg-slate-300 p-2'>Sign up</RegisterLink>
        </div>
      </div>
    </div>
  )
}

export default page
