import { ProductSummaryCards } from './desktop/ProductSummaryCards';
import { Card } from '@/components/ui/card';

export const EnhancedComparisonSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl font-bold mb-6">
            Compare <span className="text-secondary">Investment Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive, user-friendly comparison to help you make the best decision for your child's education
          </p>
        </div>

        <div className="space-y-12">
          <ProductSummaryCards />
        </div>

        {/* Key Takeaway */}
        <Card className="mt-12 p-6 bg-primary/5 border-primary/20">
          <h3 className="font-semibold text-lg mb-3">💡 Key Takeaway</h3>
          <p className="text-sm text-muted-foreground leading-relaxed space-y-3">
            <span className="block">
              SSY is safe, 8.2% tax-free return. 
              But there is a 21-year lock-in, and limit of ₹1.5 lakh annual investments.
              It's also available only for one girl child.
            </span>
            
            <span className="block mt-3">
              ULIPs combine insurance and investment but lack liquidity and flexibility. Premiums can't be adjusted, missed payments can lapse the plan, and early exits attract high penalties.
            </span>
            
            <span className="block mt-3">
              FDs offer safety but are taxed at your income slab (up to 30%), with 10% TDS deducted annually. 
              A 7% FD yields barely 5% post-tax, which often fails to beat education inflation.
            </span>
            
            <span className="block mt-3">
              <strong>Mutual Funds recommended by Nested</strong> are designed for long-term wealth creation with goal-based investing, automatic rebalancing, and tax-efficient growth. 
              They offer better returns, flexibility, and transparency making them one of the best investment options for your child's education.
            </span>
          </p>
        </Card>
      </div>
    </section>
  );
};
