import { Award, ThumbsUp, MinusCircle, ThumbsDown, Calendar, Users, Lock, ArrowLeftRight, DollarSign, TrendingUp, Receipt, BarChart3, CheckCircle, XCircle, Unlock, Ban } from 'lucide-react';

export interface InvestmentProduct {
  key: string;
  productKey: string;
  name: string;
  shortName: string;
  color: string;
  icon: typeof Award;
  score: {
    safety: number;
    flexibility: number;
    growth: number;
    taxEfficiency: number;
    overall: number;
  };
  highlights: string[];
  drawbacks: string[];
  bestFor: string;
}

export const investmentProducts: InvestmentProduct[] = [
  {
    key: 'ssy',
    productKey: 'ssy',
    name: 'Sukanya Samriddhi Yojana',
    shortName: 'SSY',
    color: 'hsl(142 71% 45%)',
    icon: Award,
    score: { safety: 5, flexibility: 2, growth: 3, taxEfficiency: 5, overall: 3.75 },
    highlights: ['Government backed', 'Highest tax benefits', 'Safe investment'],
    drawbacks: ['Only for girl child', 'Long lock-in', 'Limited flexibility'],
    bestFor: 'Parents of girl children seeking safe, tax-free returns'
  },
  {
    key: 'ulip',
    productKey: 'ulip',
    name: 'Unit Linked Insurance Plan',
    shortName: 'ULIP',
    color: 'hsl(291 64% 42%)',
    icon: BarChart3,
    score: { safety: 3, flexibility: 2, growth: 3, taxEfficiency: 4, overall: 3 },
    highlights: ['Insurance + investment', 'Tax benefits', 'Market-linked returns'],
    drawbacks: ['High charges', '5-year lock-in', 'Complex structure'],
    bestFor: 'Those seeking insurance with investment component'
  },
  {
    key: 'fd',
    productKey: 'fd',
    name: 'Fixed Deposit',
    shortName: 'FD',
    color: 'hsl(199 89% 48%)',
    icon: Lock,
    score: { safety: 5, flexibility: 3, growth: 2, taxEfficiency: 2, overall: 3 },
    highlights: ['Guaranteed returns', 'Safe & secure', 'Easy to understand'],
    drawbacks: ['Low returns', 'Taxable interest', 'Inflation risk'],
    bestFor: 'Conservative investors prioritizing capital safety'
  },
  {
    key: 'mf',
    productKey: 'mf',
    name: 'Mutual Funds',
    shortName: 'MF',
    color: 'hsl(38 92% 50%)',
    icon: TrendingUp,
    score: { safety: 4, flexibility: 5, growth: 5, taxEfficiency: 4, overall: 4.5 },
    highlights: ['Highest flexibility', 'Best growth potential', 'Low/no lock-in'],
    drawbacks: ['Market linked', 'Requires monitoring', 'Some risk involved'],
    bestFor: 'Long-term education planning with flexibility and growth'
  }
];

export interface ComparisonRow {
  category: string;
  icon: typeof Calendar;
  tooltip: string;
  ssy: { text: string; verdict?: 'best' | 'good' | 'fair' | 'poor'; icon?: typeof CheckCircle };
  ulip: { text: string; verdict?: 'best' | 'good' | 'fair' | 'poor'; icon?: typeof CheckCircle };
  fd: { text: string; verdict?: 'best' | 'good' | 'fair' | 'poor'; icon?: typeof CheckCircle };
  mf: { text: string; verdict?: 'best' | 'good' | 'fair' | 'poor'; icon?: typeof CheckCircle };
}

export const comparisonData: ComparisonRow[] = [
  {
    category: 'Tenure',
    icon: Calendar,
    tooltip: 'How long you need to stay invested',
    ssy: { text: '15 years (mandatory)', verdict: 'poor', icon: XCircle },
    ulip: { text: '5+ years', verdict: 'fair', icon: MinusCircle },
    fd: { text: 'Flexible (1-10 years)', verdict: 'good', icon: CheckCircle },
    mf: { text: 'No fixed tenure', verdict: 'best', icon: CheckCircle }
  },
  {
    category: 'Who Can Invest',
    icon: Users,
    tooltip: 'Eligibility criteria for investment',
    ssy: { text: 'Only girl child (up to 10 years)', verdict: 'poor', icon: XCircle },
    ulip: { text: 'Anyone', verdict: 'good', icon: CheckCircle },
    fd: { text: 'Anyone', verdict: 'good', icon: CheckCircle },
    mf: { text: 'Anyone', verdict: 'good', icon: CheckCircle }
  },
  {
    category: 'Lock-in Period',
    icon: Lock,
    tooltip: 'Minimum time before you can withdraw',
    ssy: { text: '15 years', verdict: 'poor', icon: XCircle },
    ulip: { text: '5 years', verdict: 'fair', icon: MinusCircle },
    fd: { text: 'None (penalty on early exit)', verdict: 'good', icon: CheckCircle },
    mf: { text: 'None to 3 years (ELSS)', verdict: 'best', icon: CheckCircle }
  },
  {
    category: 'Early Withdrawal',
    icon: ArrowLeftRight,
    tooltip: 'Can you access your money before maturity?',
    ssy: { text: 'Very limited (after 18 years)', verdict: 'poor', icon: Ban },
    ulip: { text: 'Not allowed before 5 years', verdict: 'poor', icon: XCircle },
    fd: { text: 'Yes (with penalty)', verdict: 'fair', icon: MinusCircle },
    mf: { text: 'Anytime (except ELSS)', verdict: 'best', icon: CheckCircle }
  },
  {
    category: 'Investment Range',
    icon: DollarSign,
    tooltip: 'Minimum and maximum investment amounts',
    ssy: { text: '₹250 - ₹1.5L per year', verdict: 'fair', icon: MinusCircle },
    ulip: { text: 'Typically ₹50K+ per year', verdict: 'fair', icon: MinusCircle },
    fd: { text: 'As low as ₹1,000', verdict: 'good', icon: CheckCircle },
    mf: { text: 'As low as ₹500 (SIP ₹100)', verdict: 'best', icon: CheckCircle }
  },
  {
    category: 'Can Stop/Increase',
    icon: TrendingUp,
    tooltip: 'Flexibility to pause or increase contributions',
    ssy: { text: 'Must invest every year', verdict: 'poor', icon: XCircle },
    ulip: { text: 'Must pay premium', verdict: 'poor', icon: XCircle },
    fd: { text: 'Fixed amount', verdict: 'fair', icon: MinusCircle },
    mf: { text: 'Stop/increase anytime', verdict: 'best', icon: CheckCircle }
  },
  {
    category: 'Tax Benefit (Section 80C)',
    icon: Receipt,
    tooltip: 'Tax deduction available on investment',
    ssy: { text: 'Yes (up to ₹1.5L)', verdict: 'best', icon: CheckCircle },
    ulip: { text: 'Yes (up to ₹1.5L)', verdict: 'best', icon: CheckCircle },
    fd: { text: 'Yes (up to ₹1.5L, only for 5-yr FD)', verdict: 'good', icon: CheckCircle },
    mf: { text: 'Yes (ELSS only, up to ₹1.5L)', verdict: 'good', icon: CheckCircle }
  },
  {
    category: 'Returns',
    icon: BarChart3,
    tooltip: 'Expected returns on investment',
    ssy: { text: '8.2% (fixed, govt. rate)', verdict: 'good', icon: CheckCircle },
    ulip: { text: '8-10% (market-linked, after charges)', verdict: 'fair', icon: MinusCircle },
    fd: { text: '6-7% (fixed)', verdict: 'fair', icon: MinusCircle },
    mf: { text: '12-15% (market-linked, historical)', verdict: 'best', icon: TrendingUp }
  }
];

export interface AtAGlanceMetric {
  product: string;
  productKey: string;
  safety: { value: number; label: string };
  flexibility: { value: number; label: string };
  growth: { value: number; label: string };
  taxEfficiency: { value: number; label: string };
}

export const atAGlanceData: AtAGlanceMetric[] = [
  {
    product: 'SSY',
    productKey: 'ssy',
    safety: { value: 100, label: 'Maximum' },
    flexibility: { value: 40, label: 'Low' },
    growth: { value: 60, label: 'Moderate' },
    taxEfficiency: { value: 100, label: 'Best' }
  },
  {
    product: 'ULIP',
    productKey: 'ulip',
    safety: { value: 60, label: 'Moderate' },
    flexibility: { value: 40, label: 'Low' },
    growth: { value: 60, label: 'Moderate' },
    taxEfficiency: { value: 80, label: 'Good' }
  },
  {
    product: 'FD',
    productKey: 'fd',
    safety: { value: 100, label: 'Maximum' },
    flexibility: { value: 60, label: 'Moderate' },
    growth: { value: 40, label: 'Low' },
    taxEfficiency: { value: 40, label: 'Low' }
  },
  {
    product: 'MF',
    productKey: 'mf',
    safety: { value: 80, label: 'Good' },
    flexibility: { value: 100, label: 'Maximum' },
    growth: { value: 100, label: 'Maximum' },
    taxEfficiency: { value: 80, label: 'Good' }
  }
];
