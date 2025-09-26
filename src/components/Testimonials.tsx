import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Jaipur, Rajasthan",
    rating: 5,
    text: "Started investing ₹5,000 monthly when my daughter was 2. Now she's 8 and we're already halfway to her engineering college fund! The automatic rebalancing gives me so much peace of mind.",
    goal: "Engineering Education"
  },
  {
    name: "Rajesh Kumar",
    location: "Pune, Maharashtra",
    rating: 5,
    text: "As a government employee, I was always confused about mutual funds. Nested's advisors explained everything clearly. My son's education fund is growing steadily with zero stress.",
    goal: "Medical College"
  },
  {
    name: "Meena Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    text: "Best decision we made! Started with just ₹2,000 per month. The goal-based approach helped us save for both kids' education and marriage. Highly recommend to all parents.",
    goal: "Dual Goals - Education & Marriage"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Real Stories from <span className="text-primary">Real Parents</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of Indian parents who are successfully building their children's future with Nested.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                </div>

                <blockquote className="font-body text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                <div className="border-t pt-6">
                  <div className="mb-2">
                    <div className="font-heading font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                  <div className="inline-block px-3 py-1 text-xs font-medium text-secondary bg-secondary/10 rounded-full">
                    Goal: {testimonial.goal}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}