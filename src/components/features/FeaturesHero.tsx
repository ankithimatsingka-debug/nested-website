import { Sparkles } from "lucide-react";

export function FeaturesHero() {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-8">
            <Sparkles className="h-5 w-5" />
            <span className="font-medium">Everything You Need</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Smart Features for <span className="text-primary">Smart Parents</span>
          </h1>
          
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We built Nested to make investing simple for busy parents. No complex terms, 
            no confusing choices - just smart tools that help your child's money grow safely.
          </p>
        </div>
      </div>
    </section>
  );
}