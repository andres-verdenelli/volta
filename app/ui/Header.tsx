import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between px-4">
      <h1>Logo</h1>
      <div>
        <Button asChild variant="outline">
          <Link href="/">Login</Link>
        </Button>
        <button>
          <Link href="/contact">Sign Up</Link>
        </button>
      </div>
    </header>
  )
}
