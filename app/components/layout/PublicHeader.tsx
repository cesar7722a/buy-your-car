import * as React from "react"
import { Link, useLocation } from "react-router"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "cn"
import { Button } from "~/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "~/components/ui/sheet"
import { Logo } from "~/components/shared/Logo"

interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const NAV_ITEMS: NavItem[] = [
  { label: "Veículos", href: "/carros" },
  { label: "Comparar", href: "/comparar" },
  { label: "Simulador", href: "/simulador" },
  { label: "Test Drive", href: "/test-drive" },
  {
    label: "Empresa",
    href: "/sobre",
    children: [
      { label: "Sobre nós", href: "/sobre" },
      { label: "Concessionários", href: "/concessionarios" },
      { label: "Pós-venda", href: "/pos-venda" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  { label: "Contacto", href: "/contacto" },
]

function NavLink({ item }: { item: NavItem }) {
  const { pathname } = useLocation()
  const isActive = pathname === item.href || pathname.startsWith(item.href + "/")

  if (!item.children) {
    return (
      <Link
        to={item.href}
        className={cn(
          "relative flex items-center px-3 py-2 text-sm font-medium transition-colors hover:text-primary focus-visible:rounded-md",
          isActive ? "text-primary" : "text-foreground/80"
        )}
      >
        {item.label}
        {isActive && (
          <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-accent" />
        )}
      </Link>
    )
  }

  return (
    <div className="group relative">
      <button
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="absolute left-0 top-full z-50 hidden min-w-[180px] rounded-lg border border-border bg-popover p-1 shadow-md group-hover:block">
        {item.children.map((child) => (
          <Link
            key={child.href}
            to={child.href}
            className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

/**
 * Cabeçalho fixo da área pública.
 * No telemóvel colapsa para um Sheet lateral.
 */
export function PublicHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { pathname } = useLocation()

  // Fechar menu ao mudar de rota
  React.useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Sombra ao fazer scroll
  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b bg-background/95 backdrop-blur-sm transition-shadow",
          scrolled ? "shadow-sm border-border" : "border-transparent"
        )}
      >
        <div className="container-main flex h-16 items-center justify-between gap-4">
          <Logo size="md" />

          {/* Navegação desktop */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </nav>

          {/* Acções */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
              <Link to="/entrar">Entrar</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/registar">Criar conta</Link>
            </Button>

            {/* Botão menu mobile */}
            <button
              className="flex size-10 items-center justify-center rounded-lg text-foreground hover:bg-muted lg:hidden"
              aria-label="Abrir menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Offset do header fixo */}
      <div className="h-16" aria-hidden />

      {/* Menu mobile em Sheet */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-80 p-0">
          <SheetHeader className="border-b border-border px-6 py-4">
            <SheetTitle asChild>
              <Logo size="md" />
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 p-4" aria-label="Navegação mobile">
            {NAV_ITEMS.flatMap((item) =>
              item.children
                ? [
                    <span
                      key={`label-${item.href}`}
                      className="mt-3 mb-1 px-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                    >
                      {item.label}
                    </span>,
                    ...item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    )),
                  ]
                : [
                    <Link
                      key={item.href}
                      to={item.href}
                      className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary"
                    >
                      {item.label}
                    </Link>,
                  ]
            )}
          </nav>
          <div className="border-t border-border p-4 space-y-2">
            <Button variant="outline" className="w-full" asChild>
              <Link to="/entrar">Entrar</Link>
            </Button>
            <Button className="w-full" asChild>
              <Link to="/registar">Criar conta</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
