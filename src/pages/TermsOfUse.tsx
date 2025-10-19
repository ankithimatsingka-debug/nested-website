import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground text-lg">
            Welcome to Nested Enterprises Private Limited ("we", "our", "us", "Platform"). These Terms of Use ("Terms") 
            govern your access to and use of the Platform, including its website, mobile application (if any), content, 
            and services related to mutual funds and other financial products.
          </p>
          <p className="text-muted-foreground text-lg">
            By accessing or using the Platform, you ("you", "User", "Investor") agree to comply with and be bound by 
            these Terms, along with any other policies posted on the Platform (e.g., Privacy Policy, Risk Disclosure).
          </p>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  1
                </span>
                <span>Eligibility</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>You must be at least 18 years old, or have legal capacity under your jurisdiction to enter into binding agreements.</p>
              <p>You must be a resident of, or otherwise eligible under the regulatory regime of, the country in which the Platform operates.</p>
              <p>You must complete all necessary identity verification, KYC/AML formalities, and provide accurate, complete information as requested.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  2
                </span>
                <span>Services Offered</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>The Platform allows you to view, compare, and invest in mutual funds (lump sum or SIP), switch between schemes, redeem units, and access related financial products where applicable.</p>
              <p>The Platform may supply educational content, data, tools (calculators, fund screeners), performance metrics.</p>
              <p>The Platform does not provide personalized investment advice; all decisions are your own.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  3
                </span>
                <span>Payment, Transactions and Funds Flow</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>All payments for mutual fund purchases, collections, and instalments are processed via authorized third-party exchange platforms or fund house infrastructure (e.g., BSE Star MF, NSE MF / AMCs).</p>
              <p>The Platform does not hold or custody your funds; it merely facilitates transactions through the authorized channels.</p>
              <p>You are responsible for ensuring the bank account, mandate, payment method etc. used is valid and sufficient.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  4
                </span>
                <span>Account Registration & Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>You must register an account to use certain features. Provide accurate info and update it as needed.</p>
              <p>You are responsible for maintaining confidentiality of your login credentials. The Platform is not responsible for any loss arising from unauthorized use of your account.</p>
              <p>The Platform may suspend, restrict or terminate your account if misuse, fraud, or breach of Terms is suspected.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  5
                </span>
                <span>Intellectual Property, Use of Platform Content</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>All content on the Platform (text, graphics, logos, designs, software) is owned or licensed by us or third parties. You get a limited, non-exclusive right to use for your personal / investment purposes only.</p>
              <p>You are not allowed to reproduce, distribute, modify, create derivative works, publicly display or otherwise exploit any content outside the scope granted, without our prior written permission.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  6
                </span>
                <span>Risks, Disclaimers & No Warranty</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Mutual fund investments are subject to market risk, liquidity risk, and other risks. Past performance does not guarantee future results.</p>
              <p>The Platform does not guarantee returns, safety of principal, or absence of losses.</p>
              <p>Any data, analysis, or content is for informational/demonstrative purposes only and should not be treated as professional or investment advice.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  7
                </span>
                <span>Transactions, Cancellations & Refunds</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Once a mutual fund purchase / switch / redemption order is processed or units allotted, it generally cannot be cancelled via the Platform.</p>
              <p>Refunds (if any, e.g., duplicate payment, technical error) will be handled by the AMC or exchange, as per their rules. The Platform is not responsible for delays in such refunds.</p>
              <p>Any fees, loads, exit charges, or lock-in periods applicable are as per the Scheme Information Document (SID) of the mutual fund.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  8
                </span>
                <span>Termination / Suspension</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We reserve the right to suspend or terminate your access to the Platform (or certain features) at any time for breach of these Terms, regulatory non-compliance, fraud, or security issues.</p>
              <p>On termination, your rights to access content stop; however, any outstanding obligations (pending transactions, dues) may survive termination.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  9
                </span>
                <span>Liability Limitation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>The Platform shall not be liable for losses arising from use of Platform, reliance on any content, delays in transactions caused by third-party service providers (AMCs, exchanges, banks), or regulatory changes.</p>
              <p>To the maximum extent permitted under law, our liability is limited to direct damages up to a reasonable cap (to be defined) and excludes indirect, incidental, special, punitive damages.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  10
                </span>
                <span>Regulatory Compliance</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>All offerings and services are subject to applicable regulations (e.g., SEBI rules in India), guidelines of AMCs, and statutory requirements (KYC, AML, etc.).</p>
              <p>Use of the Platform is conditioned on your compliance with any third-party terms where relevant (AMC terms, bank/mandate terms etc.).</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  11
                </span>
                <span>Changes to Terms</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We may update or modify these Terms from time to time. Any material changes will be notified via the Platform or through email.</p>
              <p>Your continued use of the Platform after changes constitutes acceptance of the revised Terms.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  12
                </span>
                <span>Governing Law & Dispute Resolution</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>These Terms are governed by the laws of India.</p>
              <p>Disputes shall be resolved in courts / forums located in Gurugram, unless mandatory jurisdictional requirements say otherwise.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  13
                </span>
                <span>Miscellaneous</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>If any provision of these Terms is held invalid or unenforceable, it shall be severed without affecting other provisions.</p>
              <p><strong>Assignment:</strong> We may assign our rights & obligations under these Terms (in whole or part) to affiliates or third parties. Your rights under these Terms are personal to you and not transferable.</p>
              <p><strong>Notices:</strong> Communication may be via email, in-app messages, or notices posted on the Platform.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
