import { cn } from "cn"
import { PackageSearch } from "lucide-react"

interface EmptyStateProps {
  title?: string
  description?: string
  icon?: React.ReactNode
  className?: string
  children?: React.ReactNode
}

/**
 * Estado vazio para listas, tabelas e pesquisas sem resultados.
 */
export function EmptyState({
  title = "Sem resultados",
  description = "Não existem itens para mostrar.",
  icon,
  className,
  children,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex min-h-[320px] flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border bg-muted/40 p-8 text-center",
        className
      )}
    >
      <div className="flex size-14 items-center justify-center rounded-full bg-muted text-muted-foreground">
        {icon ?? <PackageSearch className="size-7" />}
      </div>
      <div className="max-w-xs space-y-1">
        <p className="font-heading text-base font-semibold text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  )
}
