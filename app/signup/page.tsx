import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function Signup() {
  return (
    <div className='mx-auto max-w-md space-y-2'>
      <div className='flex justify-center'>
        <h1 className='text-lg font-bold'>Create Account</h1>
      </div>
      <form className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='name'>Name</Label>
          <Input
            name='name'
            id='name'
            placeholder='John'
          />
        </div>
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
        <div className='space-y-2'>
          <Label htmlFor='confirmPassword'>Confirm your password</Label>
          <Input
            name='confirmPassword'
            id='confirmPassword'
            placeholder='*******'
            type='password'
          />
        </div>
        <div>
          <Button className='w-full'>Sign Up</Button>
        </div>
      </form>
      <div className='flex items-center justify-center'>
        <span>Already have an account??</span>
        <Button
          asChild
          variant='link'
        >
          <Link
            className='underline'
            href='/login'
          >
            Log in
          </Link>
        </Button>
      </div>
    </div>
  )
}
