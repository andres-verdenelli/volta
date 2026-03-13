import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between px-4">
      <h1>Logo</h1>
      <div>
        <button>
          <Link href="/">Login</Link>
        </button>
        <button>
          <Link href="/contact">Sign Up</Link>
        </button>
      </div>
    </header>
  )
}
