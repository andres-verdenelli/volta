import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='mt-4 space-y-4'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Welcome to Turnito!
      </h1>
      <div className='flex gap-2'>
        <Button
          asChild
          variant='secondary'
        >
          <Link href='/login'>Log in</Link>
        </Button>
        <Button
          asChild
          variant='default'
        >
          <Link href='/signup'>Sign up</Link>
        </Button>
      </div>
    </div>
  )
}
