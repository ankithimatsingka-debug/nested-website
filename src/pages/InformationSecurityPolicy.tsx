import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InformationSecurityPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Information Security Policy
          </h1>
          <p className="text-muted-foreground text-lg">
            This Information Security Policy describes how we protect the confidentiality, integrity, and availability 
            of data in our systems and operations. It applies to all users of the platform (investors, staff, contractors) 
            and to all information systems, networks, applications, and data environments involved in offering mutual fund services.
          </p>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  1
                </span>
                <span>Purpose & Scope</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We aim to ensure that all information assets (customer data, transaction data, credentials, etc.) are protected against unauthorized access, disclosure, alteration, or destruction.</p>
              <p>This policy covers physical, technical, administrative, and operational security controls across the Platform and third-party vendors involved.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  2
                </span>
                <span>Key Security Principles</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p><strong>Confidentiality:</strong> Only authorized individuals/systems can access sensitive or personal data.</p>
              <p><strong>Integrity:</strong> Data must be accurate, complete, and protected from tampering.</p>
              <p><strong>Availability:</strong> Systems should be resilient; access to data should be maintained according to business need and regulatory requirements.</p>
              <p><strong>Least Privilege:</strong> Access rights are granted only to the minimal level required.</p>
              <p><strong>Defense-in-depth:</strong> Layers of controls (network, application, data) to prevent, detect, and mitigate threats.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  3
                </span>
                <span>Infrastructure & System Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Secure Hosting / Cloud Infrastructure</h4>
                <p>Our systems are hosted in secure environments (cloud / data centers) with strong network segmentation, firewalls, and protection against common attacks (e.g. DDoS, SQL injection, XSS).</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Encryption</h4>
                <p>Data must be encrypted in transit (TLS or equivalent) and at rest (AES or equivalent strong encryption) for sensitive or personal information.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Secure Coding Practices</h4>
                <p>Development must follow secure coding standards, regular code reviews & static/dynamic code scanning, vulnerability assessment & penetration testing (VAPT) at periodic intervals.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Endpoint / Device Security</h4>
                <p>All employee / contractor devices must be secured with antivirus/antimalware, patch management, device encryption, and other protections.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  4
                </span>
                <span>Access Control & Authentication</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Multi-Factor Authentication (MFA/2FA) for user accounts (where applicable), administration, remote access.</p>
              <p>Role-based Access Control (RBAC) with least privilege principle: only necessary access for specific roles.</p>
              <p>Strong passwords / PIN / biometric (if used), periodic review & expiry of credentials.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  5
                </span>
                <span>Physical & Operational Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Secure data centres / server rooms with restricted physical access.</p>
              <p>Controlled access to hardware, backup systems, and network infrastructure.</p>
              <p>Environmental controls (power redundancy, fire suppression, etc.).</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  6
                </span>
                <span>Data Protection & Privacy</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Storage & processing must comply with relevant laws & regulations (e.g. data protection legislation, finance sector guidance).</p>
              <p>Sensitive personal data (banking, ID proofs, PAN/Aadhaar etc.) handled with extra precautions.</p>
              <p>Regular data backups, secure storage, and tested recovery procedures.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  7
                </span>
                <span>Vendor / Third-Party Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Vendors or service providers handling or accessing our systems/data must adhere to compatible security standards.</p>
              <p>Vendors must go through risk assessments / security audits before onboarding.</p>
              <p>Contracts must include clauses on confidentiality, security, incident reporting, and data handling.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  8
                </span>
                <span>Monitoring, Auditing & Incident Response</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Continuous monitoring of systems, logs, network traffic for signs of intrusion or misuse.</p>
              <p>Incident response plan: formal process for identifying, containing, eradicating, recovering from security incidents. Clear roles, communication paths, post-incident review.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  9
                </span>
                <span>Training & Awareness</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Employees, contractors, partners receive security awareness training (onboarding + periodic refreshers).</p>
              <p>Phishing awareness, safe handling of credentials, recognizing suspicious behaviour.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  10
                </span>
                <span>Business Continuity & Disaster Recovery</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Backup & recovery plans in place for critical systems; tested periodically.</p>
              <p>Processes for continuity in case of system failure, natural disaster, or security breach.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  11
                </span>
                <span>Regulatory Compliance & Standards</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Compliance with applicable national laws/regulations (e.g. for finance, data protection, cybersecurity).</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  12
                </span>
                <span>User Responsibilities</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Users must keep their credentials (passwords, OTPs, PINs) confidential; not share with others.</p>
              <p>Users should log out of shared devices; use updated software / devices.</p>
              <p>Report suspicious activity (unauthorized logins, phishing attempts etc.).</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  13
                </span>
                <span>Policy Review & Maintenance</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>This policy should be reviewed at least annually or whenever significant changes in technology, regulation, or business processes occur.</p>
              <p>Updates must be documented, and users/staff notified accordingly.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InformationSecurityPolicy;
