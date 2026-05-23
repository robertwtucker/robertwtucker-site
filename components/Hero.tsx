type HeroProps = {
  name: string
  tagline: string
}

export default function Hero({ name, tagline }: HeroProps) {
  return (
    <section className="space-y-4 pt-6 pb-8 md:space-y-6 md:pt-10 md:pb-12">
      <h1 className="text-foreground text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl md:text-6xl md:leading-none">
        {name}
      </h1>
      <p className="text-muted-foreground max-w-2xl text-lg leading-7 md:text-xl md:leading-8">
        {tagline}
      </p>
    </section>
  )
}
