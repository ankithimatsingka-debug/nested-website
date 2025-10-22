import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg">
            This Privacy Policy ("Policy") explains how GoPlug Enterprises Private Limited ("we," "us," "our") collects, 
            uses, discloses, stores and protects your personal information when you use our website or mobile application 
            (collectively, the "Platform") for mutual fund investments and related financial services. By using the Platform, 
            you ("you," "your," "User," "Investor") consent to the practices described here.
          </p>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  1
                </span>
                <span>Who We Are & What We Do</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We are a financial platform offering mutual fund investment services, enabling you to invest, switch, redeem units, etc.</p>
              <p>We work with AMCs, Registrars & Transfer Agents, payment partners, etc., to facilitate investments.</p>
              <p>We comply with applicable laws (e.g. SEBI, AMFI, IT Act) and regulatory requirements (KYC/AML etc.).</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  2
                </span>
                <span>Information We Collect</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">a) Personal Information</h4>
                <p className="mb-2">We collect information that identifies you, such as:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Full name, date of birth, gender</li>
                  <li>Contact details: email, phone number, address</li>
                  <li>Government/Regulatory IDs: PAN, Aadhaar, etc.</li>
                  <li>Bank account details (for payments, redemptions)</li>
                  <li>KYC documents and declarations (e.g. FATCA/CRS where applicable)</li>
                  <li>Nominee details</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">b) Financial / Transaction Data</h4>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Mutual fund scheme details, investments made, SIPs, redemptions, transaction history</li>
                  <li>Mandate / payment method data</li>
                  <li>Investment preferences, risk profile</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">c) Device & Usage Information</h4>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP address, device type, operating system, browser, geolocation where permitted</li>
                  <li>Usage logs: how you interact with the Platform, pages viewed, clicks, session times etc.</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">d) Third-Party / Derived Data</h4>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>From regulatory bodies, credit bureaus (as required)</li>
                  <li>From partner services (if you opt in)</li>
                  <li>Information derived from usage or aggregated anonymized data</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  3
                </span>
                <span>How We Use Your Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We use your data for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide, maintain, and improve our services (know you, authenticate identity, execute mutual fund transactions)</li>
                <li>To comply with legal and regulatory requirements (KYC/AML, taxation, finance laws)</li>
                <li>For customer support, to respond to queries/complaints</li>
                <li>To send you transaction confirmations, statements, updates, regulatory communications</li>
                <li>If you consent, for marketing, promotions, personalized offers</li>
                <li>Fraud detection, risk management, security purposes</li>
                <li>Analytics and understanding usage patterns to improve the Platform</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  4
                </span>
                <span>Sharing & Disclosure of Your Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Asset Management Companies (AMCs), Registrars & Transfer Agents (RTAs)</strong> — to execute investments, redemptions, etc.</li>
                <li><strong>Regulatory / governmental authorities</strong> — as required under law (e.g. SEBI, tax authorities)</li>
                <li><strong>Payment gateways / banks</strong> — for fund transfers, mandate processing, refunds, etc.</li>
                <li><strong>Affiliate companies / partners</strong> — under confidentiality obligations, and only for purposes aligned with providing the service.</li>
                <li><strong>Third-party service providers</strong> — e.g. cloud hosting, analytics, customer support, as needed, under contractual obligations of security & confidentiality.</li>
                <li><strong>Marketing / advertising partners</strong> — only with your consent, where applicable</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  5
                </span>
                <span>Data Retention</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We retain your personal and financial data only as long as needed to serve the purposes listed above.</p>
              <p>Certain data must be retained for statutory or regulatory reasons (e.g. KYC records, transaction history) for the period mandated by law.</p>
              <p>Once data is no longer needed, we securely delete or anonymize it.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  6
                </span>
                <span>Your Rights</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Depending on applicable laws, you may have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To access the personal data we hold about you</li>
                <li>To correct or update inaccurate or incomplete data</li>
                <li>To delete or request deletion of your account/data (subject to legal/regulatory requirements and obligations)</li>
                <li>To withdraw or modify consent for certain uses (e.g. marketing)</li>
                <li>To opt out of promotional communications</li>
                <li>To request portability of your data (where applicable)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  7
                </span>
                <span>Cookies & Tracking Technologies</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We use cookies and similar technologies to store preferences, understand usage, estimate traffic, and to improve user experience.</p>
              <p>You may disable or refuse cookies via browser/device settings but this might limit some Platform functionality.</p>
              <p>Some cookies are essential for Platform operations, others are optional or for analytics/advertising.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  8
                </span>
                <span>Security & Protection</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We employ reasonable administrative, technical, and physical safeguards to protect your personal information from loss, unauthorized access, disclosure, alteration or destruction.</p>
              <p>Encryption, secure servers, restricted access, auditing, etc. are part of our security practices.</p>
              <p>However, no system is entirely secure; there's always some residual risk.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  9
                </span>
                <span>Children & Minors</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Our Platform is not intended for children under 18. We do not knowingly collect data from minors.</p>
              <p>If we discover we have inadvertently collected data from a minor, we will take steps to delete it, unless required to retain by law.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  10
                </span>
                <span>Legal & Regulatory Disclosures</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We may be required by law/regulation to disclose your personal data to authorities (e.g. for tax, audit, fraud or regulatory compliance).</p>
              <p>We may also disclose data in response to court orders or other legal processes.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  11
                </span>
                <span>Third-Party Links & External Services</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Our Platform may include links to third-party websites/services. These third parties have their own privacy policies; we are not responsible for their practices.</p>
              <p>If you use or connect with third party services via our Platform (e.g. payment gateways, aggregators), their policies also apply.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  12
                </span>
                <span>Changes to Privacy Policy</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We may update this Policy from time to time (for example, to reflect changes in laws, regulatory requirements or business operations).</p>
              <p>We will post updates on the Platform and note the "Last updated" date. Material changes may be notified via email or app notification.</p>
              <p>Your continued use of the Platform after changes constitutes your acceptance of the revised Policy.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  13
                </span>
                <span>Contact & Grievance Redressal</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>You may contact us with questions, concerns or complaints about our privacy practices at <a href="mailto:info@nested.com" className="text-primary hover:underline">info@nested.com</a>.</p>
              <p>Provide contact details of a Grievance Officer if required by law in your jurisdiction.</p>
              <p>We'll attempt to respond to your requests concerning your rights within a reasonable time (e.g. 30 days) subject to applicable legal limits.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
