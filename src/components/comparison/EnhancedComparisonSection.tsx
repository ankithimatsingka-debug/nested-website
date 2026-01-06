import { ProductSummaryCards } from './desktop/ProductSummaryCards';
import { Card } from '@/components/ui/card';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { useState } from 'react';

export const EnhancedComparisonSection = () => {
  const [openSections, setOpenSections] = useState({
    ssy: false,
    ulip: false,
    fd: false,
    mf: true // Keep Mutual Funds open by default as it's recommended
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl font-bold mb-6">
            Compare <span className="text-secondary">Investment Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Make the best decision for your child's education
          </p>
        </div>

        <div className="space-y-12">
          <ProductSummaryCards />
        </div>

        {/* Key Takeaway */}
        <Card className="mt-12 p-6 bg-primary/5 border-primary/20">
          <h3 className="font-semibold text-lg mb-4">💡 Key Takeaway</h3>
          
          <div className="space-y-3">
            {/* SSY Section */}
            <Collapsible open={openSections.ssy} onOpenChange={() => toggleSection('ssy')}>
              <CollapsibleTrigger className="w-full text-left group hover:text-foreground transition-colors cursor-pointer">
                <span className="text-sm leading-relaxed">
                  <strong>SSY</strong> is safe, 8.2% tax-free return...
                  {!openSections.ssy && <span className="text-muted-foreground/60"> (click to read more)</span>}
                </span>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <span className="block text-sm text-muted-foreground leading-relaxed mt-2">
                  But there is a 21-year lock-in, and limit of ₹1.5 lakh annual investments.
                  It's also available only for one girl child.
                </span>
              </CollapsibleContent>
            </Collapsible>

            {/* ULIP Section */}
            <Collapsible open={openSections.ulip} onOpenChange={() => toggleSection('ulip')}>
              <CollapsibleTrigger className="w-full text-left group hover:text-foreground transition-colors cursor-pointer">
                <span className="text-sm leading-relaxed">
                  <strong>ULIPs</strong> combine insurance and investment...
                  {!openSections.ulip && <span className="text-muted-foreground/60"> (click to read more)</span>}
                </span>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <span className="block text-sm text-muted-foreground leading-relaxed mt-2">
                  but lack liquidity and flexibility. Premiums can't be adjusted, missed payments can lapse the plan, and early exits attract high penalties.
                </span>
              </CollapsibleContent>
            </Collapsible>

            {/* FD Section */}
            <Collapsible open={openSections.fd} onOpenChange={() => toggleSection('fd')}>
              <CollapsibleTrigger className="w-full text-left group hover:text-foreground transition-colors cursor-pointer">
                <span className="text-sm leading-relaxed">
                  <strong>FDs</strong> offer safety but are taxed at your income slab...
                  {!openSections.fd && <span className="text-muted-foreground/60"> (click to read more)</span>}
                </span>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <span className="block text-sm text-muted-foreground leading-relaxed mt-2">
                  (up to 30%), with 10% TDS deducted annually. 
                  A 7% FD yields barely 5% post-tax, which often fails to beat education inflation.
                </span>
              </CollapsibleContent>
            </Collapsible>

            {/* Mutual Funds Section */}
            <Collapsible open={openSections.mf} onOpenChange={() => toggleSection('mf')}>
              <CollapsibleTrigger className="w-full text-left group hover:text-foreground transition-colors cursor-pointer">
                <span className="text-sm leading-relaxed">
                  <strong>Mutual Funds recommended by Nested</strong> are designed for long-term wealth creation...
                  {!openSections.mf && <span className="text-muted-foreground/60"> (click to read more)</span>}
                </span>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <span className="block text-sm text-muted-foreground leading-relaxed mt-2">
                  with goal-based investing, automatic rebalancing, and tax-efficient growth. 
                  They offer better returns, flexibility, and transparency making them one of the best investment options for your child's education.
                </span>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </Card>
      </div>
    </section>
  );
};
