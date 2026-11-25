import { cn } from "cn"
import { APP_CONFIG } from "~/lib/constants"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "light" | "dark"
}

const sizeMap = {
  sm: { brand: "text-base tracking-[0.2em]", sub: "text-[0.55rem] tracking-[0.15em]" },
  md: { brand: "text-xl tracking-[0.25em]", sub: "text-[0.6rem] tracking-[0.18em]" },
  lg: { brand: "text-2xl tracking-[0.3em]", sub: "text-xs tracking-[0.2em]" },
}

/**
 * Logótipo provisório em texto.
 * Substituir aqui quando houver activo visual oficial.
 */
export function Logo({ className, size = "md", variant = "dark" }: LogoProps) {
  const { brand, sub } = sizeMap[size]
  const isDark = variant === "dark"

  return (
    <a
      href="/"
      aria-label={`${APP_CONFIG.name} — Página inicial`}
      className={cn("inline-flex flex-col items-start leading-none no-underline", className)}
    >
      <span
        className={cn(
          "font-heading font-black uppercase",
          brand,
          isDark ? "text-primary" : "text-white"
        )}
      >
        HYUNDAI
      </span>
      <span
        className={cn(
          "font-sans font-medium uppercase",
          sub,
          isDark ? "text-muted-foreground" : "text-white/70"
        )}
      >
        Angola
      </span>
    </a>
  )
}
