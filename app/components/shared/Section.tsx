import { cn } from "cn"

interface SectionProps {
  className?: string
  children: React.ReactNode
  as?: React.ElementType
}

/**
 * Secção de página com espaçamento vertical padrão e largura máxima.
 */
export function Section({ className, children, as: Tag = "section" }: SectionProps) {
  return (
    <Tag className={cn("section-padding", className)}>
      <div className="container-main">{children}</div>
    </Tag>
  )
}

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
}

/**
 * Bloco de título de secção para a área pública.
 */
export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-2xl space-y-3",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <span className="inline-block font-sans text-xs font-semibold uppercase tracking-widest text-accent">
          {label}
        </span>
      )}
      <h2 className="heading-2 text-foreground">{title}</h2>
      {description && (
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  )
}
