import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const faqData = {
  "Understanding Mutual Funds": [
    {
      question: "What is a mutual fund?",
      answer: "A mutual fund pools money from many investors and invests it in stocks, bonds, or a mix of assets. Professional fund managers handle everything, so you don't need to pick individual shares."
    },
    {
      question: "How is it different from a bank FD or savings account?",
      answer: "FDs offer fixed but lower returns. Mutual funds can deliver higher long-term growth, though returns aren't guaranteed."
    },
    {
      question: "How much do I need to start?",
      answer: "You can begin with as little as ₹500–₹1,000 per month through an SIP."
    },
    {
      question: "Can I invest all at once or monthly?",
      answer: "Both are possible. SIPs help average out costs and build disciplined savings."
    },
    {
      question: "Are mutual funds safe? Can I lose money?",
      answer: "They're SEBI-regulated. Values fluctuate with the market, but staying invested for 7–10 years usually delivers steady growth."
    },
    {
      question: "Are there extra fees?",
      answer: "Funds charge a small expense ratio. Our app does not add any extra fees."
    },
    {
      question: "How fast can I withdraw money?",
      answer: "Typically within 2–3 working days."
    },
    {
      question: "Are returns guaranteed?",
      answer: "No. But historically, equity funds have outperformed FDs, gold, and real estate over the long term."
    }
  ],
  "Trust & Safety": [
    {
      question: "Are these funds SEBI/AMFI-registered?",
      answer: "Yes. Every fund on our platform is SEBI-approved and follows AMFI guidelines."
    },
    {
      question: "Who owns the investments – me or my child?",
      answer: "If the account is in your name, you own it. Minor accounts stay under your guardianship until the child turns 18."
    },
    {
      question: "Are fund recommendations unbiased?",
      answer: "Yes. Suggestions are based solely on your goals and SEBI-defined fund categories — not commissions."
    },
    {
      question: "Can I invest in any AMC?",
      answer: "Yes, you can access all SEBI-registered AMCs in India."
    },
    {
      question: "Will the app remind me about SIPs or milestones?",
      answer: "Yes, you'll receive timely reminders and progress updates."
    },
    {
      question: "What if the app shuts down?",
      answer: "Your money remains with the AMC. You can always access it directly via CAMS or KFintech."
    },
    {
      question: "Is the app AMFI registered?",
      answer: "Yes. We are fully compliant and registered with AMFI."
    }
  ],
  "How Nested Helps": [
    {
      question: "How does Nested add value?",
      answer: "We start by estimating future education costs and adjust if fees change. Then, we design a portfolio tailored to your timeline and risk profile, while tracking if you're on course."
    },
    {
      question: "How is Nested different?",
      answer: "We don't push \"top\" or \"trending\" funds. Every recommendation is goal-based. We also guide timely reallocation — for example, if you've reached 95% of your goal with just two years left, we'll prompt you to shift from equities to safer debt funds."
    },
    {
      question: "How does Nested select funds?",
      answer: "fund-selection-link"
    },
    {
      question: "What are the fees?",
      answer: "Nested is free for you. We earn standard mutual fund commissions from AMCs."
    },
    {
      question: "Aren't regular funds more expensive?",
      answer: "Yes, regular funds cost ~0.60% more on average than direct funds. But curated portfolios and smart allocation typically deliver returns that outweigh the extra cost."
    },
    {
      question: "Why not just invest through my existing account?",
      answer: "Education is a specific goal. A separate account ensures accurate cost projections and fund allocation for your child's future."
    },
    {
      question: "Can the app plan monthly investments for me?",
      answer: "Yes. Just enter your child's age, education type — we'll provide future estimated cost and calculate the SIP."
    },
    {
      question: "Can I track progress?",
      answer: "Yes, our goal tracker shows how close you are to your target."
    },
    {
      question: "Can I set up separate goals for multiple children?",
      answer: "Yes, each child can have a dedicated portfolio and tracker."
    },
    {
      question: "What if my child's plans change?",
      answer: "Update the goal anytime — the app recalculates and shows how much to adjust."
    },
    {
      question: "Can I pause or increase my SIP?",
      answer: "Yes. SIPs are fully flexible — pause, stop, or raise them anytime."
    },
    {
      question: "What if I need money earlier?",
      answer: "You can redeem partially or fully at any time."
    },
    {
      question: "What type of support is provided?",
      answer: "You will be assigned an expert AMFI-qualified RM who will help you with all your mutual fund investment related queries."
    },
    {
      question: "Is Nested Money the same as Nested Wealth?",
      answer: "Yes! While our official name is Nested Money, our mission is to help families build long-term wealth. We are often referred to by both names."
    }
  ]
};

export const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked <span className="text-secondary block sm:inline">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="How Nested Helps" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 h-auto gap-3 bg-transparent p-0">
              {Object.keys(faqData).map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category} 
                  className="text-sm px-4 py-4 border-2 border-border/60 bg-card/70 backdrop-blur-sm data-[state=active]:bg-[image:var(--gradient-primary)] data-[state=active]:text-primary-foreground data-[state=active]:border-border/60 shadow-sm hover:bg-accent/50 hover:border-border transition-all whitespace-normal leading-tight min-h-[60px] flex items-center justify-center"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(faqData).map(([category, questions]) => (
              <TabsContent key={category} value={category}>
                <Accordion type="single" collapsible className="space-y-4">
                  {questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category}-${index}`}
                      className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm"
                    >
                      <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer === "fund-selection-link" ? (
                          <span>
                            We have a detailed methodology for fund selection. You can read about it{" "}
                            <Link to="/fund-selection" className="text-primary hover:text-primary/80 underline font-medium transition-colors">
                              here
                            </Link>
                            .
                          </span>
                        ) : (
                          faq.answer
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};