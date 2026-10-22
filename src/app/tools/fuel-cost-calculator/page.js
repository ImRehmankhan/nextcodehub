import { permanentRedirect } from 'next/navigation';

export const metadata = {
  title: 'Fuel Cost Calculator: Estimate Exact Trip Gas Cost [Free]',
  description: 'Calculate exact fuel costs for any trip instantly. Enter distance, fuel price, and MPG to estimate total gas expense and cost per passenger. 100% Free.',
  alternates: {
    canonical: 'https://www.nextcodehub.com/fuel-cost-calculator',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ToolsFuelCostCalculatorPage() {
  permanentRedirect('/fuel-cost-calculator');
}
