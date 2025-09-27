import { Heart, Target, Users } from "lucide-react";

export function OurStory() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  As parents ourselves, we understand the overwhelming feeling of wanting to secure our children's future 
                  but not knowing where to start. Traditional investment advice felt too complex, too risky, or simply 
                  didn't fit our specific goals.
                </p>
                <p className="text-lg leading-relaxed">
                  We built Nested for parents who want clarity and peace of mind in planning their child's education. 
                  No confusing jargon, no one-size-fits-all solutions - just personalized, goal-based investing that 
                  grows with your family's dreams.
                </p>
                <p className="text-lg leading-relaxed">
                  Every feature we build, every decision we make, is guided by one simple question: 
                  <span className="text-primary font-medium"> "Will this help parents feel more confident about their child's future?"</span>
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Built with Love</h3>
                  <p className="text-muted-foreground">Every parent's dream matters to us. We're not just building an app - we're building peace of mind.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Goal-Focused</h3>
                  <p className="text-muted-foreground">Your child's education isn't just an investment - it's a dream with a deadline. We help you plan accordingly.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Family First</h3>
                  <p className="text-muted-foreground">We understand that every family is unique. Our solutions adapt to your specific situation and goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}