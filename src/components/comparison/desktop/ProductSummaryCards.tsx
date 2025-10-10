import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { investmentProducts } from '../shared/comparisonData';
import { Star, CheckCircle, XCircle } from 'lucide-react';

export const ProductSummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {investmentProducts.map((product) => {
        const Icon = product.icon;
        return (
          <Card 
            key={product.key} 
            className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/50"
            style={{ borderTopColor: product.color, borderTopWidth: '4px' }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${product.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: product.color }} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{product.shortName}</h3>
                  <p className="text-xs text-muted-foreground">{product.name}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`w-4 h-4 ${i < Math.round(product.score.overall) ? 'fill-warning text-warning' : 'text-muted'}`}
                />
              ))}
              <span className="ml-2 text-sm font-medium">{product.score.overall.toFixed(1)}/5</span>
            </div>

            <div className="space-y-3 mb-4">
              <div>
                <p className="text-xs font-semibold text-success mb-1">Highlights:</p>
                {product.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-xs">
                    <CheckCircle className="w-3 h-3 text-success mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
              
              <div>
                <p className="text-xs font-semibold text-muted-foreground mb-1">Considerations:</p>
                {product.drawbacks.map((drawback, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                    <XCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>{drawback}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t">
              <p className="text-xs font-medium mb-2">Best For:</p>
              <p className="text-xs text-muted-foreground">{product.bestFor}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
