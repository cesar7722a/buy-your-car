import { Link } from "react-router"
import { motion } from "motion/react"
import { cn } from "cn"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { PriceTag } from "~/components/shared/PriceTag"

export interface CarCardProps {
  slug: string
  name: string
  category: string
  basePrice: number
  imageUrl: string
  imageAlt: string
  className?: string
}

/**
 * Cartão de veículo para o catálogo público.
 * Imagem em proporção 4:3, nome, categoria e preço base.
 */
export function CarCard({
  slug,
  name,
  category,
  basePrice,
  imageUrl,
  imageAlt,
  className,
}: CarCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      {/* Imagem 4:3 */}
      <Link
        to={`/carros/${slug}`}
        aria-label={`Ver detalhes de ${name}`}
        className="block overflow-hidden"
        tabIndex={-1}
      >
        <div className="relative aspect-[4/3] bg-muted">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </div>
      </Link>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <Link
              to={`/carros/${slug}`}
              className="font-heading text-base font-bold text-foreground hover:text-primary transition-colors line-clamp-2"
            >
              {name}
            </Link>
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2">
          <PriceTag amount={basePrice} prefix="desde" size="sm" />
          <Button asChild size="sm">
            <Link to={`/carros/${slug}`}>Ver mais</Link>
          </Button>
        </div>
      </div>
    </motion.article>
  )
}
