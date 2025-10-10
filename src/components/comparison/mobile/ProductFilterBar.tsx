import { Badge } from '@/components/ui/badge';
import { investmentProducts } from '../shared/comparisonData';

interface ProductFilterBarProps {
  selectedProducts: string[];
  onToggleProduct: (productKey: string) => void;
}

export const ProductFilterBar = ({ selectedProducts, onToggleProduct }: ProductFilterBarProps) => {
  return (
    <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm py-4 px-4 border-b">
      <div className="flex items-center gap-2 flex-wrap justify-center">
        <span className="text-sm font-medium text-muted-foreground">Show:</span>
        {investmentProducts.map((product) => {
          const isSelected = selectedProducts.includes(product.key);
          return (
            <Badge
              key={product.key}
              variant={isSelected ? 'default' : 'outline'}
              className="cursor-pointer transition-all hover:scale-105"
              style={{
                backgroundColor: isSelected ? product.color : 'transparent',
                borderColor: product.color,
                color: isSelected ? 'white' : product.color
              }}
              onClick={() => onToggleProduct(product.key)}
            >
              {product.shortName}
            </Badge>
          );
        })}
      </div>
      <p className="text-xs text-center text-muted-foreground mt-2">
        Showing {selectedProducts.length} of {investmentProducts.length} products
      </p>
    </div>
  );
};
