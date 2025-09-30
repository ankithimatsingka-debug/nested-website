import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

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

const getRandomPosition = () => {
  // Tighter range on mobile to prevent cutoff, wider range on desktop
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    return {
      x: Math.random() * 40 + 30, // 30% to 70% from left
      y: Math.random() * 50 + 25  // 25% to 75% from top
    };
  }
  return {
    x: Math.random() * 60 + 20, // 20% to 80% from left
    y: Math.random() * 60 + 20  // 20% to 80% from top
  };
};

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState(getRandomPosition());
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setIsVisible(false);
      
      // After fade out completes, change content and position, then fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setPosition(getRandomPosition());
        setIsVisible(true);
      }, 300); // Match the fade-out duration
    }, 3500); // Increased interval to account for transition time

    return () => clearInterval(interval);
  }, []);


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

        <div className="relative h-96 w-full">
          <Card 
            key={`${currentIndex}-${position.x}-${position.y}`}
            className={`absolute border-0 shadow-lg bg-card/90 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
              isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'
            }`}
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: 'translate(-50%, -50%)',
              maxWidth: 'min(90vw, 28rem)',
              width: 'fit-content',
              minWidth: 'min(280px, 90vw)'
            }}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              <blockquote className="font-body text-foreground mb-4 leading-relaxed text-sm">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="border-t pt-4">
                <div className="font-heading font-semibold text-foreground text-sm">
                  — {testimonials[currentIndex].name}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}