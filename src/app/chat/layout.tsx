import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className='bg-slate-500 flex justify-end p-2'>
        <LogoutLink className='bg-slate-200 p-2 mr-5 rounded-md'>
          Logout
        </LogoutLink>
      </div>
      {children}
    </div>
  )
}

export default layout
