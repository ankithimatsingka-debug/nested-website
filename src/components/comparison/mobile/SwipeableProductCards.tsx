import { Card } from '@/components/ui/card';
import { atAGlanceData, investmentProducts } from '../shared/comparisonData';
import { MetricBar } from '../shared/MetricBar';
import { Shield, Zap, TrendingUp, Receipt, Star } from 'lucide-react';
import { useState } from 'react';

export const SwipeableProductCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-center">At a Glance</h3>
      
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {atAGlanceData.map((item) => {
            const product = investmentProducts.find(p => p.productKey === item.productKey);
            if (!product) return null;

            const Icon = product.icon;

            return (
              <div key={item.productKey} className="w-full flex-shrink-0 px-2">
                <Card className="p-6 space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <div className="flex items-center gap-3">
                      <div 
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${product.color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: product.color }} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{item.product}</h4>
                        <p className="text-xs text-muted-foreground">{product.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`w-3 h-3 ${i < Math.round(product.score.overall) ? 'fill-warning text-warning' : 'text-muted'}`}
                        />
                      ))}
                    </div>
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
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation dots - hidden on mobile */}
      <div className="hidden sm:flex justify-center gap-2 pt-2">
        {atAGlanceData.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-primary w-6' : 'bg-muted'
            }`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
