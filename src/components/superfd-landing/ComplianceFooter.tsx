const ComplianceFooter = () => {
  return (
    <footer className="px-6 py-8 md:py-10 bg-muted/50 border-t border-border/30">
      <div className="max-w-3xl mx-auto text-center space-y-3">
        <p className="font-body text-xs text-muted-foreground leading-relaxed">
          Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully. Past performance is not indicative of future results.
        </p>
        <p className="font-body text-xs text-muted-foreground">
          GoPlug Enterprises Pvt Ltd is a AMFI registered mutual fund distributor with ARN 348380.
        </p>
      </div>
    </footer>
  );
};

export default ComplianceFooter;
