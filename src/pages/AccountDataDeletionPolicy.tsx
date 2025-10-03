import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AccountDataDeletionPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="font-heading text-4xl font-bold">Account & Data Deletion Policy</h1>
            <p className="text-muted-foreground">
              This Account & Data Deletion Policy ("Policy") explains your rights and our obligations regarding deletion of your account and associated data on our platform for mutual fund services (investments, SIPs, transactions, etc.). By using the platform, you agree to this Policy.
            </p>
          </div>

          <Separator className="my-8" />

          <Card>
            <CardHeader>
              <CardTitle>1. What "Account Deletion" Means</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Account deletion means you request that we permanently deactivate your user account and remove or anonymize personal data subject to legal, regulatory, and operational constraints.
              </p>
              <p>
                Deletion is irreversible once completed. You will lose access to your account and all functionalities tied to it.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Conditions Before Account Deletion</CardTitle>
              <CardDescription>
                We may require the following before we can delete your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>All active investments (mutual funds, SIPs, etc.) must be redeemed or closed.</li>
                <li>Any pending transactions, redemptions, mandates or financial obligations must be cleared.</li>
                <li>If there are regulatory / legal requirements (e.g. tax or audit obligations) which mandate retention of certain data, we will inform you.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. How to Request Account Deletion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                You may submit a deletion request via customer support, app settings, or by contacting us via email.
              </p>
              <p>
                We may verify your identity before acting on the request (e.g. via registered email, phone, KYC documents) to prevent fraudulent deletion.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. What Data Gets Deleted vs What Must Be Retained</CardTitle>
              <CardDescription>
                Because of regulatory, legal, or operational requirements, not all data may be deleted
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Data Type</th>
                      <th className="text-left py-3 px-4 font-semibold">Deleted Upon Request</th>
                      <th className="text-left py-3 px-4 font-semibold">Retained (Legal / Regulatory Reasons)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-3 px-4">Contact details, profile info, non-essential PII</td>
                      <td className="py-3 px-4 text-green-600">Yes</td>
                      <td className="py-3 px-4 text-muted-foreground">No</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Non-transactional preferences, app usage logs</td>
                      <td className="py-3 px-4 text-green-600">Yes</td>
                      <td className="py-3 px-4 text-muted-foreground">Possibly anonymized</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Bank account / payment mandate details</td>
                      <td className="py-3 px-4 text-yellow-600">After retention period</td>
                      <td className="py-3 px-4 text-muted-foreground">If required for audit/tax/financial reporting</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Transaction history (purchases, redemptions, SIPs)</td>
                      <td className="py-3 px-4 text-red-600">No</td>
                      <td className="py-3 px-4 text-muted-foreground">Retained as required by law</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">KYC/AML documents (PAN, Aadhaar etc.)</td>
                      <td className="py-3 px-4 text-red-600">No</td>
                      <td className="py-3 px-4 text-muted-foreground">Retained as required</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Communication logs / support tickets</td>
                      <td className="py-3 px-4 text-yellow-600">Some can be deleted</td>
                      <td className="py-3 px-4 text-muted-foreground">Others retained for dispute/legal purposes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Timeline for Deletion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Acknowledge receipt of your request within 1-3 business days.</li>
                <li>Complete deletion of deletable data within 30 business days after all preconditions are met.</li>
                <li>For data that cannot be deleted immediately due to backup systems, legal hold, etc., you will be informed and retention period disclosed.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Consequences of Deletion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Once deleted, you will lose access to account; data lost cannot be recovered.</li>
                <li>Any unredeemed investment obligations must be resolved prior to deletion; otherwise deletion request may be denied or delayed.</li>
                <li>If required by law/regulation, some data will continue to be stored even after account deletion (e.g. for audit, taxation, regulatory investigations).</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. When Deletion May Be Denied or Delayed</CardTitle>
              <CardDescription>
                Deletion requests might not be fulfilled immediately (or at all) in certain scenarios
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>If you have active investments or unpaid obligations.</li>
                <li>If legal/regulatory requirements mandate retention (e.g. KYC / AML laws, tax / audit).</li>
                <li>If there is a dispute, fraud investigation, or other ongoing issue associated with your account.</li>
                <li>If the request is not properly verified.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Anonymization vs Deletion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                For data that must be retained but no longer needs to be identifiable, we may anonymize it so it cannot be traced back to you.
              </p>
              <p>
                Aggregated / anonymized data may be used for analytics, security, product development.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. How to Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                To request deletion, contact us via support email, helpdesk, or in-app deletion request form.
              </p>
              <p>
                You may need to provide identity verification.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Revision of This Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We may update this Policy occasionally (to reflect changes in law, regulation, business practices).
              </p>
              <p>
                We'll post the updated date; major changes will be notified.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccountDataDeletionPolicy;
