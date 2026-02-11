import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Palette, Sparkles, ArrowRight, Loader2,
  Wrench, FlaskConical, Stethoscope, Medal, Drama, Brush, HelpCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import nestedLogo from "@/assets/nested-logo.png";

const DREAM_CAREERS = [
  { label: "Engineer", icon: Wrench, color: "bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-950/40 dark:border-blue-800 dark:text-blue-300" },
  { label: "Scientist", icon: FlaskConical, color: "bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300" },
  { label: "Doctor", icon: Stethoscope, color: "bg-red-50 border-red-200 text-red-700 dark:bg-red-950/40 dark:border-red-800 dark:text-red-300" },
  { label: "Sports Person", icon: Medal, color: "bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-300" },
  { label: "Fine Arts", icon: Brush, color: "bg-violet-50 border-violet-200 text-violet-700 dark:bg-violet-950/40 dark:border-violet-800 dark:text-violet-300" },
  { label: "Actor", icon: Drama, color: "bg-rose-50 border-rose-200 text-rose-700 dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-300" },
  { label: "Other", icon: HelpCircle, color: "bg-muted border-border text-muted-foreground" },
];

function generateEntryCode(): string {
  const num = Math.floor(10000 + Math.random() * 90000);
  return `ND-${num}`;
}

export default function NestedDreamersRegistration() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [childName, setChildName] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [dreamCareer, setDreamCareer] = useState("");
  const [dreamCareerOther, setDreamCareerOther] = useState("");
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [pincode, setPincode] = useState("");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!childName.trim()) e.childName = "Required";
    if (!ageGroup) e.ageGroup = "Please select an age group";
    if (!dreamCareer) e.dreamCareer = "Please select a dream career";
    if (dreamCareer === "Other" && !dreamCareerOther.trim()) e.dreamCareerOther = "Please tell us their dream";
    if (!parentName.trim()) e.parentName = "Required";
    if (!phone.trim() || !/^\d{10}$/.test(phone.trim())) e.phone = "Enter a valid 10-digit number";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Enter a valid email";
    if (!instagram.trim()) e.instagram = "Required";
    if (!pincode.trim() || !/^\d{6}$/.test(pincode.trim())) e.pincode = "Enter a valid 6-digit pincode";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const entryCode = generateEntryCode();
      const { error } = await supabase.from("contest_registrations").insert({
        entry_code: entryCode,
        child_name: childName.trim(),
        age_group: ageGroup,
        dream_career: dreamCareer,
        dream_career_other: dreamCareer === "Other" ? dreamCareerOther.trim() : null,
        parent_name: parentName.trim(),
        phone: phone.trim(),
        email: email.trim(),
        instagram_handle: instagram.trim(),
        pincode: pincode.trim(),
      });
      if (error) {
        // Retry with new code if unique violation
        if (error.code === "23505") {
          const retryCode = generateEntryCode();
          await supabase.from("contest_registrations").insert({
            entry_code: retryCode,
            child_name: childName.trim(),
            age_group: ageGroup,
            dream_career: dreamCareer,
            dream_career_other: dreamCareer === "Other" ? dreamCareerOther.trim() : null,
            parent_name: parentName.trim(),
            phone: phone.trim(),
            email: email.trim(),
            instagram_handle: instagram.trim(),
            pincode: pincode.trim(),
          });
          navigate(`/nested-dreamers/dashboard?code=${retryCode}`);
        } else {
          console.error("Registration error:", error);
        }
      } else {
        navigate(`/nested-dreamers/dashboard?code=${entryCode}`);
      }
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const FieldError = ({ field }: { field: string }) =>
    errors[field] ? <p className="text-xs text-destructive mt-1">{errors[field]}</p> : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-secondary/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 py-12 md:py-20 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <img src={nestedLogo} alt="Nested" className="h-8 md:h-10" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
              <Palette className="h-4 w-4" />
              #NestedDreamers
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Make your child's dream <span className="text-primary">famous.</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              A nationwide drawing challenge celebrating what children want to become — featured on Instagram.
            </p>
            <Button
              size="lg"
              className="h-14 px-8 text-base bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
              onClick={() => document.getElementById("register-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Register My Dreamer <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register-form" className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl shadow-lg border border-border/50 p-6 md:p-8 space-y-6"
          >
            <div className="text-center space-y-1">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                Tell us about your little dreamer
              </h2>
              <p className="text-sm text-muted-foreground">Every masterpiece begins with a dream ✨</p>
            </div>

            {/* Child's Name */}
            <div className="space-y-2">
              <Label htmlFor="childName" className="text-sm font-medium">Child's First Name *</Label>
              <Input
                id="childName"
                placeholder="e.g. Aarav"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                className="h-12"
              />
              <FieldError field="childName" />
            </div>

            {/* Age Group */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">Child's Age Group *</Label>
              <RadioGroup value={ageGroup} onValueChange={setAgeGroup} className="flex gap-3">
                {["Class 1–3", "Class 4–6", "Class 7–9"].map((cls) => (
                  <label
                    key={cls}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 rounded-xl border-2 p-3 cursor-pointer transition-all text-sm font-medium",
                      ageGroup === cls
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-primary/30"
                    )}
                  >
                    <RadioGroupItem value={cls} className="sr-only" />
                    {cls}
                  </label>
                ))}
              </RadioGroup>
              <FieldError field="ageGroup" />
            </div>

            {/* Dream Career */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">Child's Dream Career *</Label>
              <div className="grid grid-cols-2 gap-2">
                {DREAM_CAREERS.map((career) => {
                  const Icon = career.icon;
                  const isSelected = dreamCareer === career.label;
                  return (
                    <button
                      key={career.label}
                      type="button"
                      onClick={() => setDreamCareer(career.label)}
                      className={cn(
                        "flex items-center gap-2 rounded-xl border-2 p-3 text-left transition-all text-sm font-medium",
                        isSelected
                          ? "border-primary bg-primary/5 text-primary ring-1 ring-primary/20"
                          : `border ${career.color}`
                      )}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {career.label}
                    </button>
                  );
                })}
              </div>
              {dreamCareer === "Other" && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                  <Input
                    placeholder="What is their dream?"
                    value={dreamCareerOther}
                    onChange={(e) => setDreamCareerOther(e.target.value)}
                    className="h-12 mt-2"
                  />
                  <FieldError field="dreamCareerOther" />
                </motion.div>
              )}
              <FieldError field="dreamCareer" />
            </div>

            {/* Parent Name */}
            <div className="space-y-2">
              <Label htmlFor="parentName" className="text-sm font-medium">Parent's Full Name *</Label>
              <Input
                id="parentName"
                placeholder="Your full name"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                className="h-12"
              />
              <FieldError field="parentName" />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
              <Input
                id="phone"
                placeholder="10-digit mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                className="h-12"
                inputMode="numeric"
              />
              <p className="text-[11px] text-muted-foreground">Used only for contest updates and features.</p>
              <FieldError field="phone" />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">Email ID *</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
              />
              <p className="text-[11px] text-muted-foreground">For results and Instagram feature alerts.</p>
              <FieldError field="email" />
            </div>

            {/* Instagram */}
            <div className="space-y-2">
              <Label htmlFor="instagram" className="text-sm font-medium">Instagram Handle *</Label>
              <Input
                id="instagram"
                placeholder="@yourname"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                className="h-12"
              />
              <p className="text-[11px] text-muted-foreground">So we can tag and feature your child on @nested.money.</p>
              <FieldError field="instagram" />
            </div>

            {/* Pincode */}
            <div className="space-y-2">
              <Label htmlFor="pincode" className="text-sm font-medium">Pincode *</Label>
              <Input
                id="pincode"
                placeholder="6-digit pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                className="h-12"
                inputMode="numeric"
              />
              <p className="text-[11px] text-muted-foreground">Used to identify city-wise Popular Choice winners.</p>
              <FieldError field="pincode" />
            </div>

            {/* Submit */}
            <div className="pt-2 space-y-3">
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full h-14 text-base bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
              >
                {isSubmitting ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Registering...</>
                ) : (
                  <>Complete Registration <ArrowRight className="ml-2 h-4 w-4" /></>
                )}
              </Button>
              <p className="text-[11px] text-muted-foreground text-center">
                Winners, features, and announcements happen on Instagram.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <img src={nestedLogo} alt="Nested" className="h-6 mx-auto mb-3" />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} GoPlug Enterprises Private Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
