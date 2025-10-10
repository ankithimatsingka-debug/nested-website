import { Award, ThumbsUp, MinusCircle, ThumbsDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProductBadgeProps {
  verdict: 'best' | 'good' | 'fair' | 'poor';
  size?: 'sm' | 'md';
}

const verdictConfig = {
  best: { 
    icon: Award, 
    label: 'Best Choice', 
    className: 'bg-success text-success-foreground hover:bg-success/90' 
  },
  good: { 
    icon: ThumbsUp, 
    label: 'Good Option', 
    className: 'bg-success-light text-success-foreground hover:bg-success-light/90' 
  },
  fair: { 
    icon: MinusCircle, 
    label: 'Fair Option', 
    className: 'bg-warning text-warning-foreground hover:bg-warning/90' 
  },
  poor: { 
    icon: ThumbsDown, 
    label: 'Not Ideal', 
    className: 'bg-destructive text-destructive-foreground hover:bg-destructive/90' 
  }
};

export const ProductBadge = ({ verdict, size = 'sm' }: ProductBadgeProps) => {
  const config = verdictConfig[verdict];
  const Icon = config.icon;
  
  return (
    <Badge className={`${config.className} ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
      <Icon className={size === 'sm' ? 'w-3 h-3 mr-1' : 'w-4 h-4 mr-1.5'} />
      {config.label}
    </Badge>
  );
};
