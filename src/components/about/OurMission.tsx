export function OurMission() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
            Our Mission
          </h2>
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12">
            <blockquote className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-6 leading-relaxed">
              "Funding dreams, one goal at a time"
            </blockquote>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We exist to empower every parent with the tools, knowledge, and confidence to turn their 
              child's educational dreams into achievable financial goals. Through personalized investing 
              and transparent guidance, we're making quality education accessible to families across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}