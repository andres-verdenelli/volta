import Link from 'next/link'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-md'>
      <div className='flex justify-between gap-2 p-4'>
        <Link href='/'>
          <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
            Turnito{' '}
          </h3>
        </Link>
      </div>
    </header>
  )
}
