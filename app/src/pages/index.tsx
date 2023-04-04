import AuthWrapper from '@/components/auth/AuthWrapper'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Background Jobs</title>
        <meta name="description" content="Background Jobs: Next.js + Supabase + Inngest + Vercel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AuthWrapper>
          <h1>Authenticated!</h1>
        </AuthWrapper>
      </main>
    </>
  )
}