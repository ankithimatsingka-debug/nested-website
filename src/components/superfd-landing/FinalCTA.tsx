import gplayBadge from "@/assets/gplay.png";

const FinalCTA = () => {
  return (
    <section className="px-6 py-16 md:py-24 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        {/* Title */}
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
          See if SuperFD suits your goals
        </h2>

        {/* Play Store Button */}
        <a
          href="https://play.google.com/store/apps/details?id=money.nested.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img
            src={gplayBadge}
            alt="Get it on Google Play"
            className="h-14 md:h-16 w-auto mx-auto hover:opacity-90 transition-opacity"
          />
        </a>

        {/* Sub-text */}
        <p className="font-body text-sm text-muted-foreground mt-4">
          Takes less than 2 minutes
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
