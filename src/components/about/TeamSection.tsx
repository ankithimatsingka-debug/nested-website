import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Ankit R Himatsingka",
      role: "Co-Founder & CEO",
      bio: "Finance professional with 15 years experience. Father of nine year old girl, passionate about making investing accessible to every parent.",
      image: "/placeholder.svg",
      initials: "AH",
      linkedin: "https://www.linkedin.com/in/ankithimatsingka/"
    },
    {
      name: "Dheeraj Reddy", 
      role: "CTO & Co-founder",
      bio: "Tech leader with expertise finance and technology.",
      image: "/placeholder.svg",
      initials: "DR",
      linkedin: "https://www.linkedin.com/in/dheeraj-kumar-reddy-dosakayala-25876a103/"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl font-bold mb-6">
              Meet <span className="text-primary">Our Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're a team of parents, finance professionals, and technology experts united by one mission: 
              helping families build a brighter financial future for their children.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-border transition-all group hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4 group-hover:scale-105 transition-transform">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-lg font-semibold bg-gradient-to-br from-primary/20 to-secondary/20">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-center gap-3">
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-muted/50 hover:bg-muted rounded-full flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-muted-foreground" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl p-8">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Join Our Mission
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking for passionate individuals who share our vision of making 
                financial planning accessible to every family. Interested in joining our team?
              </p>
              <a 
                href="mailto:info@nested.com"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors inline-block"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}