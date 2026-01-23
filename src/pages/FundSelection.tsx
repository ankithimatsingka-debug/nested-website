import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TrendingUp, Shield, Target, User, FileText, Building2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const FundSelection = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Fund Selection Methodology - Nested</title>
        <meta name="description" content="Learn how Nested selects mutual funds. Our methodology balances returns, risk, and consistency for long-term wealth creation." />
        <link rel="canonical" href="https://nested.money/fund-selection" />
      </Helmet>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-16 pb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-8 text-foreground">
              Fund Selection Methodology: Balancing Returns, Risk, and Consistency
            </h1>
          </div>
        </section>

        {/* Section 1: Why This Matters */}
        <section className="container mx-auto px-4 pt-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Why This Matters?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-base">
                At Nested, we don't chase the highest short-term returns or jump on every market trend. Our goal is to help families achieve their financial dreams with a strategy that is steady, disciplined, and built to last.
              </p>
              <p className="text-base">
                Most people choose mutual funds by looking at the "star ratings" or which fund gave the highest return last year. But investing for long-term goals such as your child's higher education requires much more discipline and careful planning.
              </p>
              <p className="text-base">
                Markets don't move in a straight line. They fall sharply, sometimes at the exact moment when you need your money the most. That's why the way we pick funds goes beyond just looking at "CAGR" (compounded annual growth rate). We filter for consistency, risk, and even whether the current fund manager is the one who actually delivered those returns in the past.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Market Volatility */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">Lessons from Recent Market Volatility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base mb-8">
                  The past few years have shown us how unpredictable markets can be:
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 animate-fade-in">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center font-bold text-base">
                      2020
                    </div>
                    <div>
                      <p className="text-muted-foreground text-base">
                        COVID-19 triggered a sudden collapse. Nifty 50 fell nearly 38% in a month, mid- and small-cap indices crashed over 40%.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 animate-fade-in">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center font-bold text-base">
                      2022
                    </div>
                    <div>
                      <p className="text-muted-foreground text-base">
                        Inflation and U.S. interest rate hikes shook both equity and debt markets. Nifty dropped ~18% from peak.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 animate-fade-in">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center font-bold text-base">
                      2024
                    </div>
                    <div>
                      <p className="text-muted-foreground text-base">
                        Indian elections and geopolitical tensions led to sharp swings. While large caps delivered modest ~9% returns, mid- and small-caps swung violently, with double-digit corrections during the year.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 3: Why This Approach Works */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-secondary bg-gradient-to-r from-secondary/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">Why This Approach Works in Real Life</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Families saving for children's education or other life goals don't just need high returns in one or two years. Instead they need consistent performance over 5, 10, or 15 years. That requires funds that can handle ups and downs, not just shine in bull markets.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Nested's Thought Process */}
        <section className="container mx-auto px-4 py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nested's Thought Process</h2>
            
            <div className="space-y-8">
              <p className="text-muted-foreground text-base text-center">
                At Nested, fund selection is not driven by short-term performance or market noise. Instead, we rely on a structured framework that considers the long-term evolution of markets, changing risk profiles, and future shifts in interest rates.
              </p>
              
              <p className="text-muted-foreground text-base text-center font-medium">
                Here's how we approach it.
              </p>

              <div className="space-y-6">
                {/* Point 1 */}
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                        1
                      </span>
                      Long-Term Market Assumptions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground text-base">
                    <p>
                      India today is a $4 trillion economy. Over the next decades, it will likely grow into a $10 trillion economy. But as economies mature, their growth rates naturally moderate — the same 6–7% GDP growth that feels normal today will not be sustainable in a $10 trillion India.
                    </p>
                    <p>
                      This structural shift has deep implications for how we forecast returns from equity markets. Our models assume realistic, forward-looking growth rates, rather than simply extrapolating past performance. We believe this disciplined realism is key to setting the right expectations and designing robust portfolios.
                    </p>
                  </CardContent>
                </Card>

                {/* Point 2 */}
                <Card className="border-l-4 border-l-secondary">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-bold text-sm">
                        2
                      </span>
                      Dynamic Asset Allocation Aligned to Life Goals
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground text-base">
                    <p>
                      Your portfolio's composition should evolve as you move closer to your financial goals.
                    </p>
                    <p>
                      When you start investing with 15 years remaining until the goal your allocation will be predominantly equity-oriented, allowing you to benefit from long-term compounding.
                    </p>
                    <p>
                      As you progress, and particularly when you are within three years of the goal, the focus shifts toward capital protection. At that stage, the portfolio will be primarily invested in fixed income, reducing volatility and locking in gains.
                    </p>
                    <p>
                      Each of these phases comes with different return assumptions, and our recommendations account for these changing dynamics rather than assuming a flat return trajectory throughout.
                    </p>
                  </CardContent>
                </Card>

                {/* Point 3 */}
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                        3
                      </span>
                      Future Interest Rate Shifts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground text-base">
                    <p>
                      Interest rates are cyclical. The rates we see today will not persist indefinitely. As the economy evolves and inflation stabilizes, returns from fixed-income instruments will likely trend lower over the long term.
                    </p>
                    <p>
                      We build these assumptions into our planning models ensuring that your expected returns reflect a realistic future, not just present-day yields.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Framework Accordion */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nested's Framework for Fund Selection</h2>
            <p className="text-muted-foreground text-base mb-8 text-center">
              Our fund selection follows a disciplined, multi-step framework:
            </p>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="step1" className="border border-border rounded-lg hover-scale">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <Target className="w-6 h-6 text-primary" />
                    <span className="text-left font-semibold">Step 1: Picking the Right Universe and Benchmarks</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 text-muted-foreground text-base">
                    <p>
                      We start by evaluating all funds that existed until the last completed calendar year. In 2025, for example, we look at funds up to 31st December 2024.
                    </p>
                    <p className="font-medium">The key rule: we don't rely on what a fund calls itself.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>If a "large-cap" fund holds mostly large-cap stocks, we compare it to Nifty 50.</li>
                      <li>If a "flexi-cap" fund is tilted towards mid-caps, we compare it to Nifty Midcap 100.</li>
                    </ul>
                    <p>This keeps the comparison honest—apples to apples, not apples to oranges.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step2" className="border border-border rounded-lg hover-scale">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <span className="text-left font-semibold">Step 2: Looking Beyond CAGR</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 text-muted-foreground text-base">
                    <p>We check:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Long-term CAGR (7–10 years).</li>
                      <li>Short-term CAGR (3 years).</li>
                      <li className="font-medium">Most importantly: How many years did the fund actually beat its benchmark?</li>
                    </ul>
                    <p>A fund that beats the index in 7 out of 10 years is far more reliable than one that shines only in 2 years and lags the rest of the time.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step3" className="border border-border rounded-lg hover-scale">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <Shield className="w-6 h-6 text-primary" />
                    <span className="text-left font-semibold">Step 3: Measuring Risk with Volatility</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 text-muted-foreground text-base">
                    <p>Here's a simple way to think about it:</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
                        <CardHeader className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
                          <CardTitle className="text-lg">Fund A</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <p className="text-base">20% returns, but falls only ~19% in bad times.</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
                        <CardHeader className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900">
                          <CardTitle className="text-lg">Fund B</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <p className="text-base">20% returns, but falls ~30% when markets turn.</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <p>Both give the same average returns, but Fund A lets you sleep at night.</p>
                    <p>This mattered in March 2020, in 2022, in 2024. Some aggressive funds lost 40%+, while conservative peers lost around 20–25%.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step4" className="border border-border rounded-lg hover-scale">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <User className="w-6 h-6 text-primary" />
                    <span className="text-left font-semibold">Step 4: Manager Tenure Matters</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 text-muted-foreground text-base">
                    <p>
                      We don't pick funds where the returns belong to a manager who left years ago.
                    </p>
                    <p>
                      Continuity matters. You don't want to ride on someone else's track record.
                    </p>
                    <p>
                      We also flag portfolio funds and keep a close eye on them if a senior level fund manager exits.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step5" className="border border-border rounded-lg hover-scale">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <FileText className="w-6 h-6 text-primary" />
                    <span className="text-left font-semibold">Step 5: The Debt Fund Filter</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 text-muted-foreground text-base">
                    <p>Whenever we choose debt funds for our portfolio, we are over-cautious.</p>
                    <p>Debt funds are often used as an alternative to fixed deposits. That means: we do not tolerate negative returns at all.</p>
                    <p>In 2020, many credit risk funds gave negative returns due to bond defaults.</p>
                    <p className="italic font-medium">For us, that disqualifies them. Debt funds in our list must never have a negative year.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step6" className="border border-border rounded-lg hover-scale">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <Target className="w-6 h-6 text-primary" />
                    <span className="text-left font-semibold">Step 6: Portfolio Construction</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 text-muted-foreground text-base">
                    <p>
                      We build your portfolio to protect against losses in any single year.
                    </p>
                    <p>
                      The closer your goal, the more conservative we get - if your goal is less than five years away, we aim to make sure no year is in loss.
                    </p>
                    <p>
                      But if your goal is 10 years or more, we allow a little more flexibility: targeting roughly an 80% chance of ensuring consistent yearly profit, since that gives room to generate higher returns over time.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step7" className="border border-border rounded-lg hover-scale">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <Building2 className="w-6 h-6 text-primary" />
                    <span className="text-left font-semibold">Step 7: Monitoring & Rebalancing</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 text-muted-foreground text-base">
                    <p>We keep it simple: 3–5 funds, no two funds from the same category, and no two funds from the same AMC.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Short time horizon? More debt and hybrid funds.</li>
                      <li>Long horizon? Flexi-cap and mid-cap SIPs.</li>
                    </ul>
                    <p>And we rebalance dynamically:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>If the goal is 90–95% achieved ahead of time, we stop SIPs and book profits.</li>
                      <li>As the target date nears, we gradually shift to safer funds to protect the corpus.</li>
                    </ul>
                    <p className="italic">
                      All this is managed by a team of experts who check not only returns and volatility but also tax impact, exit loads, and transaction costs.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Bottom Line Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">The Bottom Line</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our methodology isn't about chasing yesterday's winners. It's about building a resilient portfolio that balances returns, risk, and consistency: giving families the confidence that their goals are on track, no matter how the markets move.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <a href="https://play.google.com/store/apps/details?id=com.nexted.app" target="_blank" rel="noopener noreferrer">
                  Download on Play Store
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FundSelection;