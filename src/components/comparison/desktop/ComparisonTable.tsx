import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { comparisonData, investmentProducts } from '../shared/comparisonData';
import { ProductBadge } from '../shared/ProductBadge';
import { VerdictIcon } from '../shared/VerdictIcon';
import { Info } from 'lucide-react';

export const ComparisonTable = () => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader className="sticky top-0 bg-background z-10">
          <TableRow>
            <TableHead className="w-[200px] font-semibold">Category</TableHead>
            {investmentProducts.map((product) => (
              <TableHead key={product.key} className="text-center font-semibold">
                <div className="flex flex-col items-center gap-2">
                  <div 
                    className="px-3 py-1.5 rounded-md text-white font-semibold"
                    style={{ backgroundColor: product.color }}
                  >
                    {product.shortName}
                  </div>
                  <span className="text-xs text-muted-foreground font-normal">{product.name}</span>
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {comparisonData.map((row, idx) => {
            const Icon = row.icon;
            return (
              <TableRow key={idx} className="hover:bg-muted/50 transition-colors">
                <TableCell className="font-medium">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-2 cursor-help">
                          <Icon className="w-4 h-4 text-primary" />
                          <span>{row.category}</span>
                          <Info className="w-3 h-3 text-muted-foreground" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">{row.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
                {investmentProducts.map((product) => {
                  const data = row[product.key as keyof typeof row] as any;
                  const DataIcon = data.icon;
                  return (
                    <TableCell key={product.key} className="text-center">
                      <div className="flex flex-col items-center gap-2">
                        {DataIcon && <VerdictIcon verdict={data.verdict} iconOverride={DataIcon} />}
                        <span className="text-sm">{data.text}</span>
                        {data.verdict && <ProductBadge verdict={data.verdict} />}
                      </div>
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
