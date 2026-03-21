import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function Login() {
  return (
    <div className='mx-auto max-w-md space-y-2'>
      <div className='flex justify-center'>
        <h1 className='text-lg font-bold'>Login</h1>
      </div>
      <form className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='email'>Email</Label>
          <Input
            name='email'
            id='email'
            placeholder='john@example.com'
            type='email'
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='password'>Password</Label>
          <Input
            name='password'
            id='password'
            placeholder='*******'
            type='password'
          />
        </div>
        <div>
          <Button className='w-full'>Login</Button>
        </div>
      </form>
      <div className='flex items-center justify-center'>
        <span>Do not have an account?</span>
        <Button
          asChild
          variant='link'
        >
          <Link
            className='underline'
            href='/signup'
          >
            Sign up
          </Link>
        </Button>
      </div>
    </div>
  )
}
