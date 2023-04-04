import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react"
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from "@supabase/auth-ui-shared"

interface AuthWrapperProps {
    children: JSX.Element | JSX.Element[]
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const session = useSession()
  const supabase = useSupabaseClient()
  
  if (session) {
    return <>{children}</>
  }
  
  return (
    <>
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
    </>
  )
}