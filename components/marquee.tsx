type Props = {
  items: string[]
  className?: string
}

export function Marquee({ items, className }: Props) {
  // duplicate the items so the loop is seamless
  const doubled = [...items, ...items]
  return (
    <div
      className={`relative overflow-hidden border-y border-border bg-background ${className ?? ""}`}
      aria-hidden
    >
      <div className="flex animate-marquee whitespace-nowrap py-5 will-change-transform">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl tracking-tight px-8 flex items-center gap-8 text-foreground"
          >
            {item}
            <span
              className="inline-block size-2 rounded-full bg-primary"
              aria-hidden
            />
          </span>
        ))}
      </div>
    </div>
  )
}
