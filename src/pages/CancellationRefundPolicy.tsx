import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CancellationRefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Cancellation & Refund Policy
          </h1>
          <p className="text-muted-foreground text-lg">
            This Cancellation & Refund Policy ("Policy") governs cancellation of SIPs, transactions (purchase, switch, redemption), 
            and refunds for mutual fund services provided via Nested Enterprises Private Limited (the "Platform," "we," "us," or "our"). 
            By investing through the Platform, you ("Investor") agree to this Policy.
          </p>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  1
                </span>
                <span>Payment & Refund Flow</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                All payments and collections for mutual fund investments made through our Platform are processed 
                directly via BSE Star MF or NSE MF Online platform.
              </p>
              <p>
                All refunds/redemptions are handled directly by the respective Asset Management Companies (AMCs) 
                into your registered bank account, as per their processing timelines.
              </p>
              <p>
                The Platform does not collect investor money, nor issue refunds/redemptions at any point. 
                We act only as a facilitator of transactions through exchange-approved infrastructure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  2
                </span>
                <span>SIP / Recurring Investment Cancellation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                You may cancel any active SIP at any time through the Platform. Future installments will stop 
                once the cancellation request is accepted by the exchange/AMC.
              </p>
              <p>
                <strong className="text-foreground">Advance notice:</strong> Please cancel at least 7 days before 
                the next installment date to avoid mandate execution, as requests submitted closer may still result in debit.
              </p>
              <p>
                Installments already processed before cancellation cannot be reversed. Units will be allotted by 
                the AMC against such payments.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  3
                </span>
                <span>Transaction Cancellation (Purchase / Switch / Redemption)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                If you cancel before the order is processed by the exchange, the request may not be executed.
              </p>
              <p>
                Once an order is processed and units are allotted, it cannot be cancelled or reversed. 
                Redemption must be placed separately with the AMC/exchange.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  4
                </span>
                <span>Exit Load & Lock-In</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                Certain schemes may have exit loads or lock-in periods (e.g., ELSS). These are determined by 
                the AMC and are binding.
              </p>
              <p>
                The Platform has no control over these charges or restrictions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  5
                </span>
                <span>Refunds</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                Refunds, if applicable (e.g., for failed transactions, duplicate payments, or rejected orders), 
                will be made directly by the AMC/exchange to your registered bank account.
              </p>
              <p>
                Refund timelines are typically 5–10 business days, depending on the AMC and banking partner.
              </p>
              <p>
                The Platform does not process, authorize, or guarantee refund timelines, as these are entirely 
                managed by the AMC/exchange.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  6
                </span>
                <span>Account Closure</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                Before account closure, you must cancel active SIPs and redeem/transfer your mutual fund units.
              </p>
              <p>
                Units remain with the AMC, and redemptions will be processed only by the AMC.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  7
                </span>
                <span>Notification & Processing</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                All requests (SIP cancellation, transaction cancellation, redemption) must be submitted through 
                the Platform interface or directly through the exchange/AMC.
              </p>
              <p>
                Processing timelines depend on exchange systems, AMC processes, and bank partners.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  8
                </span>
                <span>Legal & Regulatory Compliance</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                All transactions are subject to the Scheme Information Document (SID), AMC terms, SEBI regulations, 
                and exchange rules (BSE Star MF / NSE MF).
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CancellationRefundPolicy;
