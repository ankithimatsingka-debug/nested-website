export function AboutHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-in">
            About <span className="text-primary">Nested</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:200ms]">
            We believe every parent deserves clarity and confidence when planning for their child's future. 
            That's why we created Nested - to make goal-based investing simple, transparent, and stress-free.
          </p>
        </div>
      </div>
    </section>
  );
}