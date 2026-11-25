import { cn } from "cn"
import { formatKz } from "~/lib/format"

interface PriceTagProps {
  amount: number
  prefix?: string
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

const sizeMap = {
  sm: "text-base font-semibold",
  md: "text-xl font-bold",
  lg: "text-2xl font-bold",
  xl: "text-3xl font-extrabold",
}

/**
 * Exibe um preço em kwanzas formatado via formatKz().
 * Nunca escrita directamente — sempre passa por esta função.
 */
export function PriceTag({ amount, prefix, className, size = "md" }: PriceTagProps) {
  return (
    <span className={cn("font-heading text-foreground", sizeMap[size], className)}>
      {prefix && (
        <span className="mr-1 text-sm font-normal text-muted-foreground">{prefix}</span>
      )}
      {formatKz(amount)}
    </span>
  )
}
