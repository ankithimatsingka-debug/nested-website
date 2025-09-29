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

const faqData = {
  "Getting Started": [
    {
      question: "What is Nested and how does it work?",
      answer: "Nested is a dedicated investment platform designed specifically for parents planning their child's education. We offer curated investment portfolios, goal-based planning tools, and expert guidance to help you build a secure financial foundation for your child's educational future."
    },
    {
      question: "How do I get started with Nested?",
      answer: "Getting started is simple! Download the Nested app, create your account, set your child's education goals, and choose from our recommended investment portfolios. Our calculator will help you determine the right monthly investment amount based on your timeline and goals."
    },
    {
      question: "Is Nested safe and regulated?",
      answer: "Yes, Nested is fully regulated and compliant with all financial regulations. Your investments are held with trusted fund houses and custodians. We follow strict security protocols to protect your data and investments."
    },
    {
      question: "What age should I start planning for my child's education?",
      answer: "The earlier you start, the better! Starting when your child is young allows you to take advantage of compound growth over time. Even if your child is already in school, it's never too late to start planning for higher education expenses."
    }
  ],
  "Investment Plans": [
    {
      question: "What types of investment options do you offer?",
      answer: "We offer carefully curated portfolios ranging from conservative to aggressive growth options, including equity funds, debt funds, and hybrid portfolios. Each portfolio is designed specifically for education planning with appropriate risk-return profiles."
    },
    {
      question: "How much should I invest monthly for my child's education?",
      answer: "The amount depends on your child's age, target education cost, and timeline. Our education calculator helps determine the right monthly investment amount. Generally, starting with even ₹2,000-5,000 per month can make a significant difference over time."
    },
    {
      question: "Can I change my investment amount later?",
      answer: "Absolutely! Life circumstances change, and your investment plan should be flexible. You can increase, decrease, or pause your investments as needed. We recommend reviewing and adjusting your plan annually."
    },
    {
      question: "What if I need to withdraw money before my child's education?",
      answer: "While we recommend staying invested for the full term to maximize growth, you can withdraw partially or fully if needed. Some investments may have exit loads or tax implications, which we'll clearly explain before you make any withdrawals."
    }
  ],
  "Education Planning": [
    {
      question: "How much will my child's education cost in the future?",
      answer: "Education costs are rising at 8-12% annually in India. A degree that costs ₹10 lakhs today might cost ₹25-30 lakhs in 15 years. Our calculator factors in inflation to give you realistic future cost estimates for different types of education."
    },
    {
      question: "Can I plan for multiple children with Nested?",
      answer: "Yes! You can create separate education goals for each child, with different timelines and target amounts. This helps you manage multiple education expenses and ensures each child's needs are adequately planned for."
    },
    {
      question: "What if my child decides not to pursue higher education?",
      answer: "The money you've invested remains yours and can be used for other purposes like your child's wedding, starting a business, or your own retirement. The disciplined investing habit and wealth creation benefits remain valuable regardless."
    },
    {
      question: "Can I plan for international education through Nested?",
      answer: "Absolutely! Our planning tools can accommodate international education costs, which are typically higher. We help you plan for expenses like tuition, living costs, and foreign exchange considerations."
    }
  ],
  "Account & Support": [
    {
      question: "How can I track my investment performance?",
      answer: "The Nested app provides real-time portfolio tracking, performance reports, and goal progress updates. You'll receive regular statements and can monitor your investments' growth toward your education goals."
    },
    {
      question: "What fees does Nested charge?",
      answer: "We believe in transparent pricing. Our fees are clearly disclosed upfront and are competitive with industry standards. There are no hidden charges, and we only succeed when your investments grow."
    },
    {
      question: "How do I contact customer support?",
      answer: "Our customer support team is available via the app chat, email, and phone during business hours. We also provide educational resources and webinars to help you make informed decisions about your child's education planning."
    },
    {
      question: "Can I get expert advice on my investment plan?",
      answer: "Yes! Our certified financial advisors are available to help you create and optimize your education investment strategy. We provide personalized guidance based on your specific goals and financial situation."
    }
  ]
};

export const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-primary-foreground to-primary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about planning your child's education with Nested
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="Getting Started" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {Object.keys(faqData).map((category) => (
                <TabsTrigger key={category} value={category} className="text-sm">
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
                        {faq.answer}
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