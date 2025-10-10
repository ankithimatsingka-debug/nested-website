import { ProductSummaryCards } from './desktop/ProductSummaryCards';
import { QuickCompareDrawer } from './mobile/QuickCompareDrawer';
import { Card } from '@/components/ui/card';

export const EnhancedComparisonSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-xl font-bold mb-6">
            Compare Investment Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive, user-friendly comparison to help you make the best decision for your child's education
          </p>
        </div>

        <div className="space-y-12">
          <ProductSummaryCards />
        </div>

        {/* Quick Compare Drawer - Available on all devices */}
        <QuickCompareDrawer />

        {/* Key Takeaway */}
        <Card className="mt-12 p-6 bg-primary/5 border-primary/20">
          <h3 className="font-semibold text-lg mb-3">💡 Key Takeaway</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            While each investment option has its place, <strong>Mutual Funds</strong> offer the best balance of 
            flexibility, growth potential, and accessibility for education planning. With no lock-in period 
            (except ELSS), low minimum investment, and historically strong returns, they're ideal for most families 
            planning for their child's future.
          </p>
        </Card>
      </div>
    </section>
  );
};
