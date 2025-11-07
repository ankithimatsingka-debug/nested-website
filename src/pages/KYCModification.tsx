import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle2, AlertCircle, FileText } from "lucide-react";
import { Helmet } from "react-helmet";

const KYCModification = () => {
  return (
    <>
      <Helmet>
        <title>How to Correct Name, Father's Name, and DOB on PAN, Aadhaar & Bank Records — Step-by-Step 2025 Guide</title>
        <meta name="description" content="A complete 2025 guide to update or correct your name, father's name, and date of birth on PAN, Aadhaar, and bank records. Includes documents required, online/offline steps, pro tips, timelines, and sample application letter." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12 max-w-5xl">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How to Correct Name, Father's Name, and Date of Birth on PAN, Aadhaar & Bank Records
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete 2025 Guide
            </p>
          </header>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Inconsistent personal details across PAN, Aadhaar, and bank accounts can cause serious KYC issues — blocking tax refunds, mutual fund transactions, and even bank transfers.
                </p>
                <p>
                  This guide walks you through, <strong>step by step</strong>, how to <strong>correct or modify your Name, Father's Name, and Date of Birth</strong> across <strong>PAN, Aadhaar, and bank records</strong>, including documentation, timelines, and pro tips to avoid rejection.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  The Correct Order to Fix Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Before you start:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Decide on the <strong>final, correct version</strong> of your name and DOB (as per your passport or birth certificate).</li>
                  <li><strong>Fix government IDs first</strong> — PAN and Aadhaar — since banks rely on them for KYC.</li>
                  <li>Update your <strong>bank records</strong> last, once PAN and Aadhaar reflect the same information.</li>
                </ol>
                <p className="mt-4 text-muted-foreground">
                  This sequence ensures smooth verification and avoids repeated rejections.
                </p>
              </CardContent>
            </Card>
          </section>

          <article className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Part A — Update Details on PAN (Name / Father's Name / DOB)</h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>What You Can Update</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Name (spelling correction, adding/removing initials, post-marriage change)</li>
                  <li>Father's name (correction or spelling error)</li>
                  <li>Date of Birth (as per valid proof)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Documents Required</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Name/Father's Name:</strong> Aadhaar, Passport, Voter ID, Driving Licence, Marriage Certificate, Gazette Notification, Court Order</li>
                  <li><strong>DOB:</strong> Birth Certificate, Passport, School Certificate, Pension PPO, Service ID</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Step-by-Step (Online)</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>Go to the <strong>Protean (NSDL)</strong> or <strong>UTIITSL</strong> PAN correction portal.</li>
                  <li>Select <strong>"Changes or Correction in existing PAN data."</strong></li>
                  <li>Enter your PAN, choose the field(s) to be corrected.</li>
                  <li>Upload valid supporting documents showing correct details.</li>
                  <li>Pay the processing fee (approx ₹110 for Indian address).</li>
                  <li>Submit and note the <strong>Acknowledgment/Token Number</strong>.</li>
                  <li>Track status on the same portal and download updated e-PAN once approved.</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Offline Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  If physical submission is required, print the filled form, sign it, attach self-attested copies of documents, and courier it to the address mentioned on the acknowledgment slip.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Processing usually takes <strong>7–15 working days</strong>.</li>
                  <li>Updated e-PAN can be downloaded for free once approved.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Pro Tips for PAN Correction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Keep <strong>PAN, Aadhaar, and bank name format identical</strong>.</li>
                  <li>For legal name changes (marriage or gazette), attach <strong>official proof</strong>.</li>
                  <li>Ensure clear scans of documents — blurred uploads often get rejected.</li>
                  <li>Keep your <strong>acknowledgment number</strong> handy; banks sometimes ask for it as interim proof.</li>
                </ul>
              </CardContent>
            </Card>
          </article>

          <article className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Part B — Update Details on Aadhaar (Name / Father's Name / DOB)</h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Where to Update</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">You can update Aadhaar details through:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Online:</strong> <a href="https://myaadhaar.uidai.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://myaadhaar.uidai.gov.in</a></li>
                  <li><strong>Offline:</strong> Aadhaar Seva Kendra (for major updates)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>What You Can Change Online</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Minor name corrections (spelling, order change, small edits)</li>
                  <li>Address (fully supported)</li>
                </ul>
                <p className="mt-4">
                  For major changes like <strong>legal name change, father's name update, or DOB correction</strong>, visit an <strong>Aadhaar Seva Kendra</strong> with valid proofs.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Accepted Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Name/Father's Name:</strong> Passport, PAN, Marriage Certificate, Gazette Notification, Court Order</li>
                  <li><strong>Date of Birth:</strong> Birth Certificate, Passport, School Certificate, PPO, or Government-issued ID with DOB</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Step-by-Step (Online)</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>Visit <a href="https://myaadhaar.uidai.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://myaadhaar.uidai.gov.in</a></li>
                  <li>Log in with Aadhaar number and OTP.</li>
                  <li>Select <strong>"Update Aadhaar Online" → Name/DOB/Father's Name</strong>.</li>
                  <li>Upload your valid Proof of Identity (PoI).</li>
                  <li>Pay ₹50 (UPI/Netbanking/Debit Card).</li>
                  <li>Note down your <strong>Update Request Number (URN)</strong> for tracking.</li>
                </ol>
                <p className="mt-4">
                  Track status: <a href="https://myaadhaar.uidai.gov.in/CheckAadhaarStatus" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Check Aadhaar Update Status</a>
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Step-by-Step (Offline)</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>Book an appointment or walk into your nearest <strong>Aadhaar Seva Kendra</strong>.</li>
                  <li>Fill and submit the update form with original documents.</li>
                  <li>Pay ₹50 and collect the acknowledgment slip with URN.</li>
                  <li>Download updated e-Aadhaar once approved.</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Typically <strong>7–15 working days</strong> for approval and database sync.</p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Pro Tips for Aadhaar Update
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>UIDAI allows limited lifetime updates for <strong>Name (2x)</strong>, <strong>DOB (1x)</strong>, <strong>Gender (1x)</strong>.</li>
                  <li>Use strong documents like <strong>Passport or Birth Certificate</strong> for DOB corrections.</li>
                  <li>Ensure <strong>PAN and Aadhaar names are identical</strong> — mismatched formats can block linking or refunds.</li>
                </ul>
              </CardContent>
            </Card>
          </article>

          <article className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Part C — Update Details in Bank Records (Name / Father's Name / DOB)</h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>When to Update</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Banks require updated PAN and Aadhaar as proof before they change KYC details. Update those first, then move to your bank.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Documents Required</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Updated <strong>PAN</strong> and <strong>Aadhaar</strong> (showing corrected details)</li>
                  <li><strong>Marriage Certificate</strong> / <strong>Gazette Notification</strong> / <strong>Affidavit</strong> (if applicable)</li>
                  <li>Self-attested copies + originals for verification</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Step-by-Step (Bank Process)</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>Visit your <strong>home branch</strong> or download the <strong>Change of Name/KYC Form</strong>.</li>
                  <li>Fill in your <strong>account number</strong> and new details.</li>
                  <li>Attach updated documents and submit in person (some banks accept via NetBanking).</li>
                  <li>Ask for an acknowledgment slip or stamped copy.</li>
                  <li>Request a <strong>reissued passbook or statement</strong> showing updated details.</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>2–10 working days</strong> (varies by bank).</li>
                  <li>Some private banks process instantly if KYC matches government records.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Pro Tips for Bank Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Carry <strong>originals</strong> for verification.</li>
                  <li>Request updates at the <strong>Customer ID (CIF)</strong> level so all accounts reflect the change.</li>
                  <li>If changing name due to marriage/legal reasons, always attach the <strong>official proof</strong>.</li>
                  <li>Reorder <strong>chequebook/debit card</strong> after name update if required.</li>
                </ul>
              </CardContent>
            </Card>
          </article>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Sample Application Letter for Bank</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-6 rounded-lg overflow-x-auto text-sm">
{`Date: DD/MM/YYYY

To,
The Branch Manager,
[Bank Name], [Branch]

Subject: Request for Correction of Name/Father's Name/DOB

Dear Sir/Madam,

I hold Account No. [XXXXXXXXXXXX] with your branch. I request correction of the following details in my bank records:

Existing Name: [Old Name]
New Name: [Correct Name]
Existing Father's Name: [Old Father's Name]
New Father's Name: [Correct Father's Name]
Existing DOB: [DD/MM/YYYY]
New DOB: [DD/MM/YYYY]

Enclosed:
1. Self-attested copy of updated Aadhaar and PAN
2. [Marriage Certificate / Gazette / Birth Certificate] (as applicable)

Kindly update my records and confirm once completed.

Sincerely,  
[Signature]  
[Name]  
[Mobile / Email]`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  Common Reasons for Rejection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Reason</th>
                        <th className="text-left p-3 font-semibold">Fix</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3">Mismatch between requested name and proof</td>
                        <td className="p-3">Use consistent full name format</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Missing proof for legal name change</td>
                        <td className="p-3">Attach marriage certificate or gazette</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Blurry scans or low-res photos</td>
                        <td className="p-3">Upload clear documents under 2 MB</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Attempting major Aadhaar change online</td>
                        <td className="p-3">Visit Aadhaar Seva Kendra instead</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Smart Tips to Avoid Future KYC Issues
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Maintain one <strong>canonical name format</strong> across all documents.</li>
                  <li>Keep <strong>digital scans</strong> of all identity documents.</li>
                  <li>Save <strong>acknowledgment numbers and URNs</strong> — they serve as interim proof.</li>
                  <li>For complex cases (multiple changes or legal renames), get a <strong>gazette notification</strong> — it eliminates most future verification issues.</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Final Words</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Updating your name, father's name, or date of birth across PAN, Aadhaar, and bank records might feel bureaucratic — but it's a one-time effort that pays off by eliminating KYC friction, refund delays, and compliance headaches.
                </p>
                <p>
                  Start with PAN, move to Aadhaar, and finish with your bank — and keep everything consistent.
                  Once aligned, your entire financial life syncs seamlessly across systems.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5" />
                  Useful Official Links
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <a href="https://www.protean-tinpan.com/" target="_blank" rel="noopener noreferrer">
                        Protean (NSDL) PAN Correction Portal
                      </a>
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <a href="https://www.pan.utiitsl.com/" target="_blank" rel="noopener noreferrer">
                        UTIITSL PAN Portal
                      </a>
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <a href="https://myaadhaar.uidai.gov.in" target="_blank" rel="noopener noreferrer">
                        UIDAI MyAadhaar Portal
                      </a>
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <a href="https://myaadhaar.uidai.gov.in/CheckAadhaarStatus" target="_blank" rel="noopener noreferrer">
                        Aadhaar Update Status Tracker
                      </a>
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default KYCModification;
