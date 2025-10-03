import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const InformationSecurityPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="font-heading text-4xl font-bold mb-4">Information Security Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: [Date]</p>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <div className="bg-card border rounded-lg p-6 mb-6 shadow-sm">
            <p className="text-foreground leading-relaxed">
              This Information Security Policy describes how we protect the confidentiality, integrity, and availability of data in our systems and operations. It applies to all users of the platform (investors, staff, contractors) and to all information systems, networks, applications, and data environments involved in offering mutual fund services.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold mb-4 text-foreground">1. Purpose & Scope</h2>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>We aim to ensure that all information assets (customer data, transaction data, credentials, etc.) are protected against unauthorized access, disclosure, alteration, or destruction.</li>
                <li>This policy covers physical, technical, administrative, and operational security controls across the Platform and third-party vendors involved.</li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold mb-4 text-foreground">2. Key Security Principles</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Confidentiality:</strong> Only authorized individuals/systems can access sensitive or personal data.</li>
                <li><strong className="text-foreground">Integrity:</strong> Data must be accurate, complete, and protected from tampering.</li>
                <li><strong className="text-foreground">Availability:</strong> Systems should be resilient; access to data should be maintained according to business need and regulatory requirements.</li>
                <li><strong className="text-foreground">Least Privilege:</strong> Access rights are granted only to the minimal level required.</li>
                <li><strong className="text-foreground">Defense-in-depth:</strong> Layers of controls (network, application, data) to prevent, detect, and mitigate threats.</li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold mb-4 text-foreground">3. Infrastructure & System Security</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Secure Hosting / Cloud Infrastructure</h3>
                  <p className="text-muted-foreground">
                    Our systems are hosted in secure environments (cloud / data centers) with strong network segmentation, firewalls, and protection against common attacks (e.g. DDoS, SQL injection, XSS).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Encryption</h3>
                  <p className="text-muted-foreground">
                    Data must be encrypted in transit (TLS or equivalent) and at rest (AES or equivalent strong encryption) for sensitive or personal information.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Secure Coding Practices</h3>
                  <p className="text-muted-foreground">
                    Development must follow secure coding standards, regular code reviews & static/dynamic code scanning, vulnerability assessment & penetration testing (VAPT) at periodic intervals.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Endpoint / Device Security</h3>
                  <p className="text-muted-foreground">
                    All employee / contractor devices must be secured with antivirus/antimalware, patch management, device encryption, and other protections.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold mb-4 text-foreground">4. Access Control & Authentication</h2>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Multi-Factor Authentication (MFA/2FA) for user accounts (where applicable), administration, remote access.</li>
                <li>Role-based Access Control (RBAC) with least privilege principle: only necessary access for specific roles.</li>
                <li>Strong passwords / PIN / biometric (if used), periodic review & expiry of credentials.</li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold mb-4 text-foreground">5. Physical & Operational Security</h2>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Secure data centres / server rooms with restricted physical access.</li>
                <li>Controlled access to hardware, backup systems, and network infrastructure.</li>
                <li>Environmental controls (power redundancy, fire suppression, etc.).</li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold mb-4 text-foreground">6. Data Protection & Privacy</h2>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Storage & processing must comply with relevant laws & regulations (e.g. data protection legislation, finance sector guidance).</li>
                <li>Sensitive personal data (banking, ID proofs, PAN/Aadhaar etc.) handled with extra precautions.</li>
                <li>Regular data backups, secure storage, and tested recovery procedures.</li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold mb-4 text-foreground">7. Vendor / Third-Party Security</h2>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Vendors or service providers handling or accessing our systems/data must adhere to compatible security standards.</li>
                <li>Vendors must go through risk assessments / security audits before onboarding.</li>
                <li>Contracts must include clauses on confidentiality, security, incident reporting, and data handling.</li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold mb-4 text-foreground">8. Monitoring, Auditing & Incident Response</h2>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Continuous monitoring of systems, logs, network traffic for signs of intrusion or misuse.</li>
                <li>Incident response plan: formal process for identifying, containing, eradicating, recovering from security incidents. Clear roles, communication paths, post-incident review.</li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold mb-4 text-foreground">9. Training & Awareness</h2>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Employees, contractors, partners receive security awareness training (onboarding + periodic refreshers).</li>
                <li>Phishing awareness, safe handling of credentials, recognizing suspicious behaviour.</li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold mb-4 text-foreground">10. Business Continuity & Disaster Recovery</h2>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Backup & recovery plans in place for critical systems; tested periodically.</li>
                <li>Processes for continuity in case of system failure, natural disaster, or security breach.</li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold mb-4 text-foreground">11. Regulatory Compliance & Standards</h2>
              <p className="text-muted-foreground">
                Compliance with applicable national laws/regulations (e.g. for finance, data protection, cybersecurity).
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold mb-4 text-foreground">12. User Responsibilities</h2>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Users must keep their credentials (passwords, OTPs, PINs) confidential; not share with others.</li>
                <li>Users should log out of shared devices; use updated software / devices.</li>
                <li>Report suspicious activity (unauthorized logins, phishing attempts etc.).</li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold mb-4 text-foreground">13. Policy Review & Maintenance</h2>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>This policy should be reviewed at least annually or whenever significant changes in technology, regulation, or business processes occur.</li>
                <li>Updates must be documented, and users/staff notified accordingly.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InformationSecurityPolicy;
