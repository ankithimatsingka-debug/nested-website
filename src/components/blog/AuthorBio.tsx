import ankitPhoto from "@/assets/ankit.jpeg";

export function AuthorBio() {
  return (
    <div className="mt-12 flex flex-col sm:flex-row gap-5 p-6 rounded-xl border border-border bg-card">
      <img
        src={ankitPhoto}
        alt="Ankit Himatsingka"
        className="w-20 h-20 rounded-full object-cover shrink-0"
        loading="lazy"
      />
      <div>
        <p className="font-heading font-semibold text-lg mb-1">Ankit Himatsingka</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Ankit is a finance professional with 15+ years of experience across investments, corporate finance, and wealth advisory. He currently serves as CFO while advising clients on portfolio strategy and capital allocation. He specializes in mutual funds, PMS, and alternative investments, with a strong focus on risk-adjusted returns and long-term wealth creation. An alumnus of Harvard Business School's senior executive leadership program, Ankit actively writes to simplify investing for serious, long-term investors.
        </p>
      </div>
    </div>
  );
}
