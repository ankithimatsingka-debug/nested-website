export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  readTime: string;
  coverImage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "understanding-mutual-fund-taxation-2025",
    title: "Understanding Mutual Fund Taxation in 2025",
    excerpt: "A comprehensive guide to how your mutual fund returns are taxed in India, including the latest budget changes and strategies to minimize your tax burden.",
    content: `
      <p class="text-lg text-muted-foreground mb-6">Mutual fund taxation in India can seem complex, but understanding the basics can help you make smarter investment decisions and potentially save on taxes.</p>
      
      <h2 class="text-2xl font-heading font-semibold mt-8 mb-4">Types of Mutual Fund Taxation</h2>
      <p class="mb-4">The taxation of mutual funds depends primarily on two factors: the type of fund (equity or debt) and the holding period of your investment.</p>
      
      <h3 class="text-xl font-heading font-medium mt-6 mb-3">Equity Mutual Funds</h3>
      <p class="mb-4">Equity mutual funds are those that invest at least 65% of their corpus in equity and equity-related instruments. For these funds:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Short-term capital gains (STCG):</strong> If you sell within 1 year, gains are taxed at 20%.</li>
        <li><strong>Long-term capital gains (LTCG):</strong> If you hold for more than 1 year, gains above ₹1 lakh are taxed at 10% without indexation benefit.</li>
      </ul>
      
      <h3 class="text-xl font-heading font-medium mt-6 mb-3">Debt Mutual Funds</h3>
      <p class="mb-4">For debt funds and other non-equity oriented funds:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>All gains are now taxed as per your income tax slab, regardless of holding period (as per 2023 budget changes).</li>
        <li>No indexation benefit is available for new investments.</li>
      </ul>
      
      <h2 class="text-2xl font-heading font-semibold mt-8 mb-4">Tax-Saving Strategies</h2>
      <p class="mb-4">Here are some strategies to optimize your mutual fund taxation:</p>
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li><strong>Hold equity funds for more than 1 year</strong> to benefit from lower LTCG tax rates.</li>
        <li><strong>Utilize the ₹1 lakh exemption</strong> on equity LTCG by booking profits strategically.</li>
        <li><strong>Invest in ELSS funds</strong> for tax deduction under Section 80C (up to ₹1.5 lakh).</li>
        <li><strong>Consider SWP from equity funds</strong> for regular income with tax efficiency.</li>
      </ol>
      
      <h2 class="text-2xl font-heading font-semibold mt-8 mb-4">Conclusion</h2>
      <p class="mb-4">Understanding mutual fund taxation helps you plan your investments better. Always consider the tax implications alongside returns when making investment decisions. For personalized advice, consult a tax professional.</p>
    `,
    author: "Nested Team",
    publishedAt: "2025-01-08",
    category: "Tax Planning",
    readTime: "6 min read"
  },
  {
    slug: "start-investing-for-childs-education",
    title: "How to Start Investing for Your Child's Education",
    excerpt: "Education costs are rising rapidly. Learn how to start building a corpus for your child's future education through systematic mutual fund investments.",
    content: `
      <p class="text-lg text-muted-foreground mb-6">With education costs rising at 10-12% annually in India, starting early is crucial for building an adequate corpus for your child's higher education.</p>
      
      <h2 class="text-2xl font-heading font-semibold mt-8 mb-4">Why Start Early?</h2>
      <p class="mb-4">The power of compounding works best over long periods. Starting when your child is young gives your investments more time to grow.</p>
      <p class="mb-4">For example, if you start investing ₹10,000 per month when your child is born, with an expected return of 12% annually, you could accumulate approximately ₹75 lakhs by the time they turn 18.</p>
      
      <h2 class="text-2xl font-heading font-semibold mt-8 mb-4">Choosing the Right Funds</h2>
      <p class="mb-4">For a long-term goal like education (10+ years away), you can afford to take more risk:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Equity Mutual Funds:</strong> Best for goals 7+ years away. Consider large-cap or flexi-cap funds.</li>
        <li><strong>Hybrid Funds:</strong> Good for medium-term goals (5-7 years). Balanced advantage funds work well.</li>
        <li><strong>Debt Funds:</strong> Suitable when the goal is less than 3 years away.</li>
      </ul>
      
      <h2 class="text-2xl font-heading font-semibold mt-8 mb-4">The SIP Advantage</h2>
      <p class="mb-4">Systematic Investment Plans (SIPs) are ideal for building an education corpus:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Rupee cost averaging reduces the impact of market volatility.</li>
        <li>Automated investments ensure discipline.</li>
        <li>Start small and increase as your income grows.</li>
      </ul>
      
      <h2 class="text-2xl font-heading font-semibold mt-8 mb-4">Review and Rebalance</h2>
      <p class="mb-4">As your child grows closer to needing the funds, gradually shift from equity to debt to protect your corpus from market volatility. A good rule of thumb is to start shifting 2-3 years before you need the money.</p>
    `,
    author: "Nested Team",
    publishedAt: "2025-01-05",
    category: "Education Planning",
    readTime: "5 min read"
  },
  {
    slug: "sip-vs-lumpsum-investment",
    title: "SIP vs Lumpsum: Which is Better for You?",
    excerpt: "Should you invest a lump sum amount or spread it across monthly SIPs? Understand the pros and cons of each approach.",
    content: `
      <p class="text-lg text-muted-foreground mb-6">One of the most common dilemmas investors face is whether to invest a large sum at once (lumpsum) or spread it across regular intervals (SIP).</p>
      
      <h2 class="text-2xl font-heading font-semibold mt-8 mb-4">Understanding SIP</h2>
      <p class="mb-4">A Systematic Investment Plan (SIP) allows you to invest a fixed amount at regular intervals (usually monthly). Key benefits include:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Rupee Cost Averaging:</strong> You buy more units when prices are low and fewer when prices are high.</li>
        <li><strong>Disciplined Investing:</strong> Automates your investment habit.</li>
        <li><strong>Lower Entry Barrier:</strong> Start with as little as ₹500/month.</li>
        <li><strong>Reduces Timing Risk:</strong> No need to time the market.</li>
      </ul>
      
      <h2 class="text-2xl font-heading font-semibold mt-8 mb-4">Understanding Lumpsum</h2>
      <p class="mb-4">Lumpsum investing means investing a large amount at once. This approach is beneficial when:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>You receive a bonus, inheritance, or any windfall.</li>
        <li>Markets are significantly corrected (buying at lower levels).</li>
        <li>You have a high-risk tolerance.</li>
      </ul>
      
      <h2 class="text-2xl font-heading font-semibold mt-8 mb-4">Which is Better?</h2>
      <p class="mb-4">Research shows that in a rising market, lumpsum investments tend to perform better. However, since we cannot predict market direction:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>For salaried individuals:</strong> SIP is ideal as it matches your cash flow.</li>
        <li><strong>For a windfall amount:</strong> Consider investing via STP (Systematic Transfer Plan) - invest lumpsum in a liquid fund and transfer to equity over 6-12 months.</li>
        <li><strong>For experienced investors:</strong> Lumpsum during market corrections can boost returns.</li>
      </ul>
      
      <h2 class="text-2xl font-heading font-semibold mt-8 mb-4">The Verdict</h2>
      <p class="mb-4">For most investors, especially beginners, SIP is the recommended approach. It takes the emotion out of investing and helps build wealth consistently over time.</p>
    `,
    author: "Nested Team",
    publishedAt: "2025-01-02",
    category: "Investment Strategy",
    readTime: "5 min read"
  }
];

export const getBlogPost = (slug: string): BlogPost | undefined => 
  blogPosts.find(post => post.slug === slug);

export const getRecentPosts = (count: number = 3): BlogPost[] => 
  [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);

export const getRelatedPosts = (currentSlug: string, count: number = 2): BlogPost[] => 
  blogPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, count);
