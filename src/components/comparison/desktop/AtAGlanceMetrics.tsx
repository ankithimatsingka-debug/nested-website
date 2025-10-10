import { Card } from '@/components/ui/card';
import { atAGlanceData, investmentProducts } from '../shared/comparisonData';
import { MetricBar } from '../shared/MetricBar';
import { Shield, Zap, TrendingUp, Receipt } from 'lucide-react';

export const AtAGlanceMetrics = () => {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-center">At a Glance Comparison</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {atAGlanceData.map((item) => {
          const product = investmentProducts.find(p => p.productKey === item.productKey);
          if (!product) return null;

          return (
            <Card key={item.productKey} className="p-6 space-y-4">
              <div className="text-center pb-4 border-b">
                <div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-2"
                  style={{ backgroundColor: `${product.color}20` }}
                >
                  <span className="text-xl font-bold" style={{ color: product.color }}>
                    {item.product}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{product.name}</p>
              </div>
              
              <div className="space-y-4">
                <MetricBar 
                  icon={Shield}
                  label="Safety"
                  value={item.safety.value}
                  valueLabel={item.safety.label}
                  color={product.color}
                />
                <MetricBar 
                  icon={Zap}
                  label="Flexibility"
                  value={item.flexibility.value}
                  valueLabel={item.flexibility.label}
                  color={product.color}
                />
                <MetricBar 
                  icon={TrendingUp}
                  label="Growth"
                  value={item.growth.value}
                  valueLabel={item.growth.label}
                  color={product.color}
                />
                <MetricBar 
                  icon={Receipt}
                  label="Tax Efficiency"
                  value={item.taxEfficiency.value}
                  valueLabel={item.taxEfficiency.label}
                  color={product.color}
                />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
