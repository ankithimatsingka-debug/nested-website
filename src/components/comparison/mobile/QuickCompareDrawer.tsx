import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Checkbox } from '@/components/ui/checkbox';
import { investmentProducts, comparisonData } from '../shared/comparisonData';
import { Card } from '@/components/ui/card';
import { VerdictIcon } from '../shared/VerdictIcon';
import { GitCompare } from 'lucide-react';

export const QuickCompareDrawer = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleProduct = (key: string) => {
    setSelectedProducts(prev => {
      if (prev.includes(key)) {
        return prev.filter(k => k !== key);
      }
      if (prev.length < 2) {
        return [...prev, key];
      }
      return [prev[1], key];
    });
  };

  const selectedProductsData = investmentProducts.filter(p => selectedProducts.includes(p.key));

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          className="fixed bottom-6 right-6 z-50 shadow-lg rounded-full w-14 h-14 md:w-auto md:h-auto md:rounded-md md:px-6"
          size="lg"
        >
          <GitCompare className="w-5 h-5 md:mr-2" />
          <span className="hidden md:inline">Compare Any 2</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[90vh] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Quick Compare Products</SheetTitle>
        </SheetHeader>
        
        <div className="py-6 space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-4">
              Select up to 2 products to compare side-by-side:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {investmentProducts.map((product) => {
                const Icon = product.icon;
                const isSelected = selectedProducts.includes(product.key);
                const isDisabled = selectedProducts.length >= 2 && !isSelected;
                
                return (
                  <Card 
                    key={product.key}
                    className={`p-4 cursor-pointer transition-all ${
                      isSelected ? 'ring-2 ring-primary' : ''
                    } ${isDisabled ? 'opacity-50' : ''}`}
                    onClick={() => !isDisabled && toggleProduct(product.key)}
                  >
                    <div className="flex items-start gap-3">
                      <Checkbox 
                        checked={isSelected}
                        disabled={isDisabled}
                        onCheckedChange={() => !isDisabled && toggleProduct(product.key)}
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="w-4 h-4" style={{ color: product.color }} />
                          <span className="font-semibold">{product.shortName}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{product.name}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {selectedProductsData.length === 2 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Side-by-Side Comparison</h3>
              {comparisonData.map((row, idx) => {
                const Icon = row.icon;
                return (
                  <Card key={idx} className="p-4">
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b">
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-sm">{row.category}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProductsData.map((product) => {
                        const data = row[product.key as keyof typeof row] as any;
                        const DataIcon = data.icon;
                        return (
                          <div key={product.key} className="space-y-1">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-semibold" style={{ color: product.color }}>
                                {product.shortName}
                              </span>
                              {DataIcon && <VerdictIcon verdict={data.verdict} iconOverride={DataIcon} />}
                            </div>
                            <p className="text-xs">{data.text}</p>
                          </div>
                        );
                      })}
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
