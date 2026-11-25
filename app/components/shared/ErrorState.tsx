import { cn } from "cn"
import { AlertCircle, RefreshCw } from "lucide-react"
import { Button } from "~/components/ui/button"

interface ErrorStateProps {
  title?: string
  description?: string
  className?: string
  onRetry?: () => void
}

/**
 * Estado de erro para listas, formulários e carregamentos falhados.
 */
export function ErrorState({
  title = "Ocorreu um erro",
  description = "Não foi possível carregar os dados. Por favor, tente novamente.",
  className,
  onRetry,
}: ErrorStateProps) {
  return (
    <div
      className={cn(
        "flex min-h-[320px] flex-col items-center justify-center gap-4 rounded-xl border border-destructive/20 bg-destructive/5 p-8 text-center",
        className
      )}
    >
      <div className="flex size-14 items-center justify-center rounded-full bg-destructive/10 text-destructive">
        <AlertCircle className="size-7" />
      </div>
      <div className="max-w-xs space-y-1">
        <p className="font-heading text-base font-semibold text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {onRetry && (
        <Button variant="outline" size="sm" onClick={onRetry}>
          <RefreshCw className="mr-2 size-3.5" />
          Tentar novamente
        </Button>
      )}
    </div>
  )
}
