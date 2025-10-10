import { useIsMobile } from "@/hooks/use-mobile";
import { useRef, useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const investmentProducts = [
  { key: "ssy", name: "Sukanya Samriddhi Yojna", shortName: "SSY" },
  { key: "ulip", name: "Unit-linked Life Insurance Plan", shortName: "ULIP" },
  { key: "fd", name: "Fixed Deposits", shortName: "FD" },
  { key: "mf", name: "Mutual Funds", shortName: "MF" },
];

const comparisonData = [
  {
    category: "Overall Verdict",
    ssy: { verdict: "bad", text: "Not suitable", bullets: ["21-yr lock-in", "₹1.5 L investment limit", "One girl child only covered"] },
    ulip: { verdict: "warn", text: "Not ideal", bullets: ["Fixed maturity", "Low-visibility of actual returns", "No flexibility on tenure, investment, returns", "Investment amount cannot be change"] },
    fd: { verdict: "bad", text: "Not ideal", bullets: ["Returns less than inflation", "Real value drops", "High rate of tax and TDS"] },
    mf: { verdict: "good", text: "Best fit", bullets: ["Flexible & no lock-in", "Best post-tax returns", "Full flexibility on tenure, investment, returns"] },
  },
  {
    category: "Tenure",
    ssy: { text: "Deposit for 15 yrs, maturity in 21 yrs" },
    ulip: { text: "Typically 15–30 yrs" },
    fd: { text: "7 days – 10 yrs" },
    mf: { text: "From 1 day to any time period" },
  },
  {
    category: "Who Can Invest",
    ssy: { text: "Parents of one girl of age less than 10 yrs" },
    ulip: { text: "Anyone" },
    fd: { text: "Anyone" },
    mf: { text: "Anyone" },
  },
  {
    category: "Lock-in Period",
    ssy: { text: "21 yrs" },
    ulip: { text: "Usually minimum of 5 yrs" },
    fd: { text: "Tenure-based" },
    mf: { text: "None (ELSS 3 yrs)" },
  },
  {
    category: "Early Withdrawal",
    ssy: { text: "Only for marriage" },
    ulip: { text: "Allowed w/ penalty" },
    fd: { text: "Allowed w/ penalty" },
    mf: { text: "Anytime (with minimal exit load)" },
  },
  {
    category: "Investment Range",
    ssy: { text: "₹250 – ₹1.50 L / yr" },
    ulip: { text: "Usually min ₹50 K / yr" },
    fd: { text: "No limit" },
    mf: { text: "No limit" },
  },
  {
    category: "Can Stop Investing?",
    ssy: { text: "No" },
    ulip: { text: "No" },
    fd: { text: "Yes" },
    mf: { text: "Yes" },
  },
  {
    category: "Can Increase Amount?",
    ssy: { text: "No" },
    ulip: { text: "No" },
    fd: { text: "Yes" },
    mf: { text: "Yes" },
  },
  {
    category: "Tax Benefit (Old Regime)",
    ssy: { text: "80C up to ₹1.5 L" },
    ulip: { text: "80C ₹1.5 L (≤ ₹2.5 L u/s 10(10D))" },
    fd: { text: "None" },
    mf: { text: "None (ELSS under 80C)" },
  },
  {
    category: "TDS on Gains",
    ssy: { text: "Nil" },
    ulip: { text: "Nil" },
    fd: { text: "10% / yr" },
    mf: { text: "Nil" },
  },
  {
    category: "Tax on Gains",
    ssy: { text: "Tax-free" },
    ulip: { text: "12.5% (>12 m)" },
    fd: { text: "Slab rate (30% + cess)" },
    mf: { text: "12.5% (>12 m)" },
  },
  {
    category: "Historical Returns",
    ssy: { text: "~7.6% → ~9.1%" },
    ulip: { text: "~8–12% (varies)" },
    fd: { text: "~8–10%" },
    mf: { text: "~12–18% CAGR" },
  },
  {
    category: "Expected Returns (Now)",
    ssy: { text: "~8.2% p.a." },
    ulip: { text: "~6–12% p.a." },
    fd: { text: "~5–7.5% p.a." },
    mf: { text: "~12–18% CAGR" },
  },
];

const atAGlanceData = [
  { product: "ssy", name: "SSY", safety: "High", flexibility: "Low", growth: "Moderate", taxEfficiency: "Excellent" },
  { product: "ulip", name: "ULIP", safety: "Medium", flexibility: "Low", growth: "Moderate", taxEfficiency: "Decent" },
  { product: "fd", name: "FD", safety: "High", flexibility: "Medium", growth: "Low", taxEfficiency: "Weak" },
  { product: "mf", name: "MF", safety: "Medium", flexibility: "High", growth: "High", taxEfficiency: "Strong" },
];

const InvestmentHeader = ({ product }: { product: typeof investmentProducts[0] }) => (
  <div className={`text-sm font-semibold text-${product.key}-foreground bg-${product.key} px-3 py-2 rounded-t-lg`}>
    {product.name}
  </div>
);

const MobileComparisonCard = ({ product, data }: { product: string; data: any }) => {
  const productKey = product as "ssy" | "ulip" | "fd" | "mf";
  const productData = data[productKey];
  
  const bgColors = {
    ssy: '#fcfbf4',
    ulip: '#fef7f9',
    fd: '#f5fafe',
    mf: '#f4faf6'
  };
  
  return (
    <div 
      className="border rounded-lg p-3 dark:bg-opacity-10 dark:border-opacity-30" 
      style={{ 
        backgroundColor: bgColors[productKey],
        borderColor: productKey === 'ssy' ? 'hsl(45 93% 47%)' : 
                     productKey === 'ulip' ? 'hsl(271 76% 53%)' : 
                     productKey === 'fd' ? 'hsl(217 91% 60%)' : 
                     'hsl(142 71% 45%)'
      }}
    >
      {productData.verdict && (
        <div className="mb-2">
          <span className={`font-semibold text-gray-900`}>
            {productData.text}
          </span>
          {productData.bullets && (
            <ul className="mt-1 space-y-0.5 text-xs text-gray-800">
              {productData.bullets.map((bullet: string, idx: number) => (
                <li key={idx}>• {bullet}</li>
              ))}
            </ul>
          )}
        </div>
      )}
      {!productData.verdict && (
        <p className="text-xs text-gray-900">{productData.text}</p>
      )}
    </div>
  );
};

const MobileAtAGlanceCards = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const bgColors = {
    ssy: '#fcfbf4',
    ulip: '#fef7f9',
    fd: '#f5fafe',
    mf: '#f4faf6'
  };
  
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const index = Math.round(scrollPosition / cardWidth);
      setActiveIndex(index);
    };
    
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="mt-4">
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-3 pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {atAGlanceData.map((item) => (
          <Card 
            key={item.product} 
            className="flex-shrink-0 w-[calc(100%-1rem)] snap-center p-4 dark:bg-opacity-10"
            style={{ 
              backgroundColor: bgColors[item.product as keyof typeof bgColors],
              borderColor: item.product === 'ssy' ? 'hsl(45 93% 47%)' : 
                           item.product === 'ulip' ? 'hsl(271 76% 53%)' : 
                           item.product === 'fd' ? 'hsl(217 91% 60%)' : 
                           'hsl(142 71% 45%)'
            }}
          >
            <div className={`text-lg font-semibold text-gray-900 mb-3`}>{item.name}</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">Safety:</span>
                <span className="font-medium text-gray-900">{item.safety}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Flexibility:</span>
                <span className="font-medium text-gray-900">{item.flexibility}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Growth:</span>
                <span className="font-medium text-gray-900">{item.growth}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Tax:</span>
                <span className="font-medium text-gray-900">{item.taxEfficiency}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Navigation Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {atAGlanceData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const container = scrollContainerRef.current;
              if (container) {
                container.scrollTo({
                  left: index * container.offsetWidth,
                  behavior: 'smooth'
                });
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === index 
                ? 'bg-primary w-6' 
                : 'bg-muted-foreground/30'
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export const CompareInvestmentProducts = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-2xl font-bold text-center mb-6">Compare Investment Products</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            See how different investment options stack up for your child's education goals
          </p>

          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
            {comparisonData.map((row, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-card rounded-lg border shadow-sm"
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <span className="text-sm font-semibold text-left">{row.category}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="grid grid-cols-2 gap-3">
                    {investmentProducts.map((product) => (
                      <div key={product.key}>
                        <div className="text-xs font-semibold text-gray-700 border-b pb-1 mb-2">
                          {product.shortName}
                        </div>
                        <MobileComparisonCard product={product.key} data={row} />
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">At a Glance</h3>
            <MobileAtAGlanceCards />
          </div>

          <div className="mt-6 p-4 bg-mf/10 border border-mf/20 rounded-lg">
            <p className="text-sm">
              <span className="font-bold">Key takeaway:</span> For education goals,{" "}
              <span className="text-mf font-semibold">Mutual Funds</span> offer the best mix of flexibility, growth, and tax benefits.
              Traditional options like <span className="text-ssy font-semibold">SSY</span> or{" "}
              <span className="text-fd font-semibold">FD</span> are safe but may not grow fast enough to meet rising education costs.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Desktop Table View
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-2xl font-bold text-center mb-6">Compare Investment Products</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          See how different investment options stack up for your child's education goals
        </p>

        <div className="overflow-x-auto bg-card rounded-lg shadow-md border">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-left font-semibold bg-muted/50">Category</th>
                <th className="p-4 text-left font-semibold bg-ssy/10">Sukanya Samriddhi Yojna</th>
                <th className="p-4 text-left font-semibold bg-ulip/10">Unit-linked Life Insurance Plan</th>
                <th className="p-4 text-left font-semibold bg-fd/10">Fixed Deposits</th>
                <th className="p-4 text-left font-semibold bg-mf/10">Mutual Funds</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-semibold">{row.category}</td>
                  {investmentProducts.map((product) => {
                    const data = row[product.key as keyof typeof row];
                    if (typeof data === 'object' && 'verdict' in data) {
                      return (
                        <td key={product.key} className="p-4">
                          <div className={`font-semibold ${data.verdict === 'good' ? 'text-mf' : data.verdict === 'warn' ? 'text-ulip' : 'text-destructive'}`}>
                            {data.text}
                          </div>
                          {data.bullets && (
                            <ul className="mt-1 space-y-0.5 text-sm text-muted-foreground">
                              {data.bullets.map((bullet: string, bidx: number) => (
                                <li key={bidx}>• {bullet}</li>
                              ))}
                            </ul>
                          )}
                        </td>
                      );
                    }
                    return (
                      <td key={product.key} className="p-4 text-sm">
                        {(data as any).text}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">At a Glance</h3>
          <div className="overflow-x-auto bg-card rounded-lg shadow-md border">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="p-4 text-left font-semibold"></th>
                  <th className="p-4 text-left font-semibold">Safety</th>
                  <th className="p-4 text-left font-semibold">Flexibility</th>
                  <th className="p-4 text-left font-semibold">Growth</th>
                  <th className="p-4 text-left font-semibold">Tax Efficiency</th>
                </tr>
              </thead>
              <tbody>
                {atAGlanceData.map((item) => (
                  <tr key={item.product} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                    <td className={`p-4 font-semibold text-${item.product}`}>{item.name}</td>
                    <td className="p-4">{item.safety}</td>
                    <td className="p-4">{item.flexibility}</td>
                    <td className="p-4">{item.growth}</td>
                    <td className="p-4">{item.taxEfficiency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 p-4 bg-mf/10 border border-mf/20 rounded-lg">
          <p className="text-sm">
            <span className="font-bold">Key takeaway:</span> For education goals,{" "}
            <span className="text-mf font-semibold">Mutual Funds</span> offer the best mix of flexibility, growth, and tax benefits.
            Traditional options like <span className="text-ssy font-semibold">SSY</span> or{" "}
            <span className="text-fd font-semibold">FD</span> are safe but may not grow fast enough to meet rising education costs.
          </p>
        </div>
      </div>
    </section>
  );
};
