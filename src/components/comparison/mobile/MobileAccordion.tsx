import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { comparisonData, investmentProducts } from '../shared/comparisonData';
import { Card } from '@/components/ui/card';
import { ProductBadge } from '../shared/ProductBadge';
import { VerdictIcon } from '../shared/VerdictIcon';
import { Award } from 'lucide-react';

interface MobileAccordionProps {
  selectedProducts: string[];
}

export const MobileAccordion = ({ selectedProducts }: MobileAccordionProps) => {
  const filteredProducts = investmentProducts.filter(p => selectedProducts.includes(p.key));

  return (
    <Accordion type="multiple" className="space-y-4">
      {comparisonData.map((row, idx) => {
        const Icon = row.icon;
        
        // Find the best product in this category
        const bestProduct = filteredProducts.reduce((best, product) => {
          const data = row[product.key as keyof typeof row] as any;
          if (data.verdict === 'best') return product;
          return best;
        }, null as typeof filteredProducts[0] | null);

        return (
          <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg">
            <AccordionTrigger className="px-4 hover:no-underline">
              <div className="flex items-center justify-between w-full pr-4">
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-left">{row.category}</span>
                </div>
                {bestProduct && (
                  <div className="flex items-center gap-1 text-xs" style={{ color: bestProduct.color }}>
                    <Award className="w-3 h-3" />
                    <span className="font-medium">{bestProduct.shortName}</span>
                  </div>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <p className="text-xs text-muted-foreground mb-4 italic">{row.tooltip}</p>
              <div className="grid grid-cols-1 gap-3">
                {filteredProducts.map((product) => {
                  const data = row[product.key as keyof typeof row] as any;
                  const DataIcon = data.icon;
                  
                  return (
                    <Card 
                      key={product.key}
                      className="p-4"
                      style={{ 
                        borderLeft: `4px solid ${product.color}`,
                        backgroundColor: data.verdict === 'best' ? `${product.color}10` : 'transparent'
                      }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold" style={{ color: product.color }}>
                              {product.shortName}
                            </span>
                            {DataIcon && <VerdictIcon verdict={data.verdict} iconOverride={DataIcon} />}
                          </div>
                          <p className="text-sm">{data.text}</p>
                        </div>
                        {data.verdict && (
                          <div className="flex-shrink-0">
                            <ProductBadge verdict={data.verdict} />
                          </div>
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
