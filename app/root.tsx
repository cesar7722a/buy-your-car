import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router"
import { TooltipProvider } from "~/components/ui/tooltip"
import type { Route } from "./+types/root"
import "./app.css"

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-background text-foreground antialiased">
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let title = "Erro inesperado"
  let message = "Ocorreu um erro inesperado. Por favor, tente novamente."
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    title = error.status === 404 ? "Página não encontrada" : `Erro ${error.status}`
    message =
      error.status === 404
        ? "A página que procura não existe ou foi movida."
        : error.statusText || message
  } else if (import.meta.env.DEV && error instanceof Error) {
    message = error.message
    stack = error.stack
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-4xl font-bold font-heading">{title}</h1>
      <p className="max-w-md text-muted-foreground">{message}</p>
      {stack && (
        <pre className="w-full max-w-2xl overflow-x-auto rounded-lg bg-muted p-4 text-left text-xs">
          <code>{stack}</code>
        </pre>
      )}
      <a
        href="/"
        className="text-primary underline underline-offset-4 hover:opacity-80"
      >
        Voltar ao início
      </a>
    </main>
  )
}
