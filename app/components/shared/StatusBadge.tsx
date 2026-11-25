import { cn } from "cn"
import { Badge } from "~/components/ui/badge"

export type OrderStatus =
  | "pending"
  | "awaiting_payment"
  | "payment_received"
  | "processing"
  | "ready"
  | "delivered"
  | "cancelled"

export type GenericStatus = "active" | "inactive" | "draft" | "archived"

type StatusVariant = "default" | "secondary" | "destructive" | "outline"

interface StatusConfig {
  label: string
  variant: StatusVariant
  className?: string
}

const ORDER_STATUS_MAP: Record<OrderStatus, StatusConfig> = {
  pending:          { label: "Pendente",           variant: "outline" },
  awaiting_payment: { label: "A aguardar pagamento", variant: "secondary", className: "border-warning/50 bg-warning/10 text-warning" },
  payment_received: { label: "Pagamento recebido", variant: "secondary", className: "border-success/50 bg-success/10 text-success" },
  processing:       { label: "Em processamento",   variant: "secondary", className: "border-info/50 bg-info/10 text-info" },
  ready:            { label: "Pronto",             variant: "secondary", className: "border-success/50 bg-success/10 text-success" },
  delivered:        { label: "Entregue",           variant: "secondary", className: "bg-success/15 text-success border-success/40" },
  cancelled:        { label: "Cancelado",          variant: "destructive" },
}

const GENERIC_STATUS_MAP: Record<GenericStatus, StatusConfig> = {
  active:   { label: "Activo",    variant: "secondary", className: "bg-success/10 text-success border-success/40" },
  inactive: { label: "Inactivo",  variant: "outline" },
  draft:    { label: "Rascunho",  variant: "secondary", className: "bg-warning/10 text-warning border-warning/40" },
  archived: { label: "Arquivado", variant: "secondary" },
}

interface StatusBadgeProps {
  status: OrderStatus | GenericStatus
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config =
    (ORDER_STATUS_MAP as Record<string, StatusConfig>)[status] ??
    (GENERIC_STATUS_MAP as Record<string, StatusConfig>)[status] ??
    { label: status, variant: "outline" as StatusVariant }

  return (
    <Badge
      variant={config.variant}
      className={cn("whitespace-nowrap text-xs font-medium", config.className, className)}
    >
      {config.label}
    </Badge>
  )
}
