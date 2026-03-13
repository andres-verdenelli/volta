export default function test({ children }: { children: React.ReactNode }) {
  return (
    <main className="border-3 border-purple-700 p-4">
      <h1>Soy el layout wraper</h1>
      {children}
    </main>
  )
}
