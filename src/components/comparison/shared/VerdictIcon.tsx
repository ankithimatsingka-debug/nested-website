import { CheckCircle, XCircle, MinusCircle, TrendingUp } from 'lucide-react';

interface VerdictIconProps {
  verdict: 'best' | 'good' | 'fair' | 'poor';
  iconOverride?: typeof CheckCircle;
}

const verdictIcons = {
  best: CheckCircle,
  good: CheckCircle,
  fair: MinusCircle,
  poor: XCircle
};

const verdictColors = {
  best: 'text-success',
  good: 'text-success-light',
  fair: 'text-warning',
  poor: 'text-destructive'
};

export const VerdictIcon = ({ verdict, iconOverride }: VerdictIconProps) => {
  const Icon = iconOverride || verdictIcons[verdict];
  const colorClass = verdictColors[verdict];
  
  return <Icon className={`w-4 h-4 ${colorClass}`} />;
};
