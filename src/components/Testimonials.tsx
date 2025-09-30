import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  { text: "Nested made saving for my daughter's college so simple and stress-free.", name: "Anita R.", rating: 4.5 },
  { text: "I finally feel confident that my son's education is financially secure.", name: "Rohit S.", rating: 5 },
  { text: "The clarity and guidance I received were unmatched.", name: "Meera K.", rating: 4 },
  { text: "I love how the app connects every rupee I invest to my child's goals.", name: "Vikas M.", rating: 4.5 },
  { text: "Planning for higher education abroad no longer feels impossible.", name: "Priya D.", rating: 5 },
  { text: "This is the first time I feel in control of my child's financial future.", name: "Arjun T.", rating: 4 },
  { text: "Nested gave me peace of mind without the jargon.", name: "Kavita P.", rating: 4.5 },
  { text: "Their portfolios are built exactly for parents like me.", name: "Sanjay B.", rating: 5 },
  { text: "I'm glad I started early — now I know I'll be ready when my daughter is.", name: "Nisha V.", rating: 4 },
  { text: "The design is simple, but the impact is huge.", name: "Amit J.", rating: 4.5 },
  { text: "Every parent should have this app — it makes goal planning effortless.", name: "Shalini G.", rating: 5 },
  { text: "Nested gave me confidence that my investments are on the right track.", name: "Dev R.", rating: 4 },
  { text: "This feels like a true partner in securing my child's dreams.", name: "Sunita N.", rating: 4.5 },
  { text: "No distractions, no confusion — just clear planning.", name: "Karan H.", rating: 5 },
  { text: "I can finally sleep peacefully knowing my child's education is secure.", name: "Pooja L.", rating: 4 }
];

export function Testimonials() {

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-secondary text-secondary" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-4 w-4 text-secondary/30" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="h-4 w-4 fill-secondary text-secondary" />
          </div>
        </div>
      );
    }

    return stars;
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-2xl font-bold mb-6">
            Real Stories from <span className="text-primary">Real Parents</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of Indian parents who are successfully building their children's future with Nested.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <Card className="border-0 shadow-lg bg-card/90 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <blockquote className="font-body text-foreground mb-4 leading-relaxed text-sm">
                      "{testimonial.text}"
                    </blockquote>

                    <div className="border-t pt-4">
                      <div className="font-heading font-semibold text-foreground text-sm">
                        — {testimonial.name}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}