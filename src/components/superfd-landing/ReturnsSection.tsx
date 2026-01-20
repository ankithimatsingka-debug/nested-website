import { Card } from "@/components/ui/card";

const ReturnsSection = () => {
  return (
    <section id="returns-section" className="px-6 py-16 md:py-24 bg-muted/30">
      <div className="max-w-2xl mx-auto text-center">
        {/* Title */}
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-10 md:mb-14">
          What kind of returns can you expect?
        </h2>

        {/* Returns Card */}
        <Card className="p-8 md:p-12 bg-background border-border/50 shadow-sm">
          <p className="font-body text-sm text-muted-foreground uppercase tracking-wide mb-3">
            Targeting
          </p>
          <p className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            Up to 11% p.a.*
          </p>
          <p className="font-body text-sm md:text-base text-muted-foreground">
            Returns are based on 20+ years of data. But may vary in future.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default ReturnsSection;
