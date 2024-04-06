import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import Chat from './_components/Chat'

const page = async () => {
  const { isAuthenticated } = getKindeServerSession()
  const isLoggedIn = await isAuthenticated()

  if (!isLoggedIn) redirect('/api/auth/login')

  return <Chat />
}

export default page
