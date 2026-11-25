export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-5xl font-bold font-heading">404</h1>
      <p className="text-xl text-muted-foreground">Página não encontrada.</p>
      <a href="/" className="text-primary underline underline-offset-4">
        Voltar ao início
      </a>
    </main>
  )
}
