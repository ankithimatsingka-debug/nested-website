import { Progress } from '@/components/ui/progress';
import { LucideIcon } from 'lucide-react';

interface MetricBarProps {
  icon: LucideIcon;
  label: string;
  value: number;
  valueLabel: string;
  color?: string;
}

export const MetricBar = ({ icon: Icon, label, value, valueLabel, color = 'hsl(var(--primary))' }: MetricBarProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-muted-foreground" />
          <span className="font-medium">{label}</span>
        </div>
        <span className="text-muted-foreground">{valueLabel}</span>
      </div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div 
          className="h-full transition-all duration-500 rounded-full"
          style={{ 
            width: `${value}%`,
            backgroundColor: color
          }}
        />
      </div>
    </div>
  );
};
