import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AccountDataDeletionPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Account & Data Deletion Policy
          </h1>
          <p className="text-muted-foreground text-lg">
            This Account & Data Deletion Policy ("Policy") explains your rights and our obligations regarding deletion 
            of your account and associated data on our platform for mutual fund services (investments, SIPs, transactions, etc.). 
            By using the platform, you agree to this Policy.
          </p>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  1
                </span>
                <span>What "Account Deletion" Means</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Account deletion means you request that we permanently deactivate your user account and remove or anonymize personal data subject to legal, regulatory, and operational constraints.</p>
              <p>Deletion is irreversible once completed. You will lose access to your account and all functionalities tied to it.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  2
                </span>
                <span>Conditions Before Account Deletion</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We may require the following before we can delete your account:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All active investments (mutual funds, SIPs, etc.) must be redeemed or closed.</li>
                <li>Any pending transactions, redemptions, mandates or financial obligations must be cleared.</li>
                <li>If there are regulatory / legal requirements (e.g. tax or audit obligations) which mandate retention of certain data, we will inform you.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  3
                </span>
                <span>How to Request Account Deletion</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>You may submit a deletion request via customer support, app settings, or by contacting us via email.</p>
              <p>We may verify your identity before acting on the request (e.g. via registered email, phone, KYC documents) to prevent fraudulent deletion.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  4
                </span>
                <span>What Data Gets Deleted vs What Must Be Retained</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Because of regulatory, legal, or operational requirements, not all data may be deleted. Below is a typical approach:</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left py-3 px-4 font-semibold border">Data Type</th>
                      <th className="text-left py-3 px-4 font-semibold border">Deleted Upon Request</th>
                      <th className="text-left py-3 px-4 font-semibold border">Retained (Legal / Regulatory Reasons)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 border">Contact details, profile info, non-essential PII</td>
                      <td className="py-3 px-4 border">Yes</td>
                      <td className="py-3 px-4 border">No</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 border">Non-transactional preferences, app usage logs (non-security related)</td>
                      <td className="py-3 px-4 border">Yes</td>
                      <td className="py-3 px-4 border">Possibly anonymized</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 border">Bank account / payment mandate details</td>
                      <td className="py-3 px-4 border">After necessary retention period, unless required by regulation</td>
                      <td className="py-3 px-4 border">If required for audit/tax/financial reporting</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 border">Transaction history (mutual fund purchases, redemptions, SIPs, switches)</td>
                      <td className="py-3 px-4 border">No (must retain for regulatory compliance / audit)</td>
                      <td className="py-3 px-4 border">Retained as required by law</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 border">KYC/AML documents (PAN, Aadhaar etc.)</td>
                      <td className="py-3 px-4 border">No (cannot delete if law requires retention)</td>
                      <td className="py-3 px-4 border">Retained as required</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border">Communication logs / support tickets</td>
                      <td className="py-3 px-4 border">Some can be deleted; others retained if needed for dispute/legal/regulatory purpose</td>
                      <td className="py-3 px-4 border">Retained where necessary</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  5
                </span>
                <span>Timeline for Deletion</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Acknowledge receipt of your request within [X] business days (for example, 1-3 days).</p>
              <p>Complete deletion of deletable data within [Y] business days after all preconditions are met (for example, 30 days).</p>
              <p>For data that cannot be deleted immediately due to backup systems, legal hold, etc., you will be informed and retention period disclosed.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  6
                </span>
                <span>Consequences of Deletion</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Once deleted, you will lose access to account; data lost cannot be recovered.</p>
              <p>Any unredeemed investment obligations must be resolved prior to deletion; otherwise deletion request may be denied or delayed.</p>
              <p>If required by law/regulation, some data will continue to be stored even after account deletion (e.g. for audit, taxation, regulatory investigations).</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  7
                </span>
                <span>When Deletion May Be Denied or Delayed</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Deletion requests might not be fulfilled immediately (or at all) in certain scenarios, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>If you have active investments or unpaid obligations.</li>
                <li>If legal/regulatory requirements mandate retention (e.g. KYC / AML laws, tax / audit).</li>
                <li>If there is a dispute, fraud investigation, or other ongoing issue associated with your account.</li>
                <li>If the request is not properly verified.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  8
                </span>
                <span>Anonymization vs Deletion</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>For data that must be retained but no longer needs to be identifiable, we may anonymize it so it cannot be traced back to you.</p>
              <p>Aggregated / anonymized data may be used for analytics, security, product development.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  9
                </span>
                <span>How to Contact Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>To request deletion, contact us via [support email / helpdesk / in-app deletion request form].</p>
              <p>You may need to provide identity verification.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  10
                </span>
                <span>Revision of This Policy</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We may update this Policy occasionally (to reflect changes in law, regulation, business practices).</p>
              <p>We'll post the updated date; major changes will be notified.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccountDataDeletionPolicy;
