import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Palette, Camera, Instagram, Hash, UserPlus, Copy, Check,
  Trophy, Award, Medal, Sparkles, ArrowRight, Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import nestedLogo from "@/assets/nested-logo.png";
import { EducationJourney } from "@/components/education/EducationJourney";

type Registration = {
  child_name: string;
  entry_code: string;
  age_group: string;
  pincode: string;
  dream_career: string;
  dream_career_other: string | null;
};

const CHECKLIST = [
  { icon: Camera, label: "Take a clear photo of the drawing" },
  { icon: Instagram, label: "Post it to Instagram or Facebook Feed" },
  { icon: Palette, label: "Tag @nested.money in the caption" },
  { icon: Hash, label: "Use #NestedDreamers" },
  { icon: UserPlus, label: "Follow @nested.money (required for awards & features)" },
];

const CAPTION_TEXT = `Vote for this picture for the Popular Choice Award 🎨✨\nFollow @nested.money to support young dreamers 💛`;

const AWARDS = [
  {
    title: "Popular Choice Award",
    subtitle: "City Level",
    description: "Most-liked artwork from each pincode",
    prize: "Certificate + ₹2,500 voucher",
    icon: Medal,
    color: "bg-amber-50 border-amber-200 dark:bg-amber-950/40 dark:border-amber-800",
    iconColor: "text-amber-600",
  },
  {
    title: "State Champion",
    subtitle: "",
    description: "Most-liked artwork from each state",
    prize: "Certificate + ₹10,000 voucher",
    icon: Award,
    color: "bg-blue-50 border-blue-200 dark:bg-blue-950/40 dark:border-blue-800",
    iconColor: "text-blue-600",
  },
  {
    title: "National Champion",
    subtitle: "",
    description: "Top artwork across India",
    prize: "Certificate + ₹25,000 voucher",
    icon: Trophy,
    color: "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800",
    iconColor: "text-emerald-600",
  },
];

function ageGroupToYear(ageGroup: string): number {
  if (ageGroup === "Class 1–3") return 12;
  if (ageGroup === "Class 4–6") return 9;
  return 6;
}

export default function NestedDreamersDashboard() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const [entry, setEntry] = useState<Registration | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(CHECKLIST.length).fill(false));

  useEffect(() => {
    if (!code) { setLoading(false); return; }
    supabase
      .from("contest_registrations")
      .select("child_name, entry_code, age_group, pincode, dream_career, dream_career_other")
      .eq("entry_code", code)
      .single()
      .then(({ data }) => {
        if (data) setEntry(data as Registration);
        setLoading(false);
      });
  }, [code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(CAPTION_TEXT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleCheck = (idx: number) => {
    setCheckedItems((prev) => { const n = [...prev]; n[idx] = !n[idx]; return n; });
  };

  const yearsToCollege = useMemo(() => entry ? ageGroupToYear(entry.age_group) : 13, [entry]);

  const currentYear = new Date().getFullYear();
  const futureYear = currentYear + yearsToCollege;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Loading your entry...</div>
      </div>
    );
  }

  if (!entry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h2 className="font-heading text-xl font-bold text-foreground">Entry not found</h2>
          <p className="text-muted-foreground text-sm">Please check your entry link.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <img src={nestedLogo} alt="Nested" className="h-7" />
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
            <Palette className="h-3.5 w-3.5" />
            #NestedDreamers
          </div>
        </div>
      </header>

      {/* Entry Identity */}
      <section className="py-8 md:py-12 bg-gradient-hero">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              🎨 This is {entry.child_name}'s Official Entry Page
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-xs">
                Entry Code: {entry.entry_code}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-xs">
                {entry.age_group}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-xs">
                📍 {entry.pincode}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              📍 Featured entries and winners are announced on <span className="font-semibold text-primary">@nested.money</span> Instagram.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Action Checklist */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-lg space-y-6">
          <div className="text-center space-y-1">
            <h2 className="font-heading text-xl font-bold text-foreground">Showcase on Instagram</h2>
            <p className="text-sm text-muted-foreground">Once posted, your entry is live for voting and eligible for Instagram features.</p>
          </div>

          <div className="space-y-3">
            {CHECKLIST.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={idx}
                  type="button"
                  onClick={() => toggleCheck(idx)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className={cn(
                    "w-full flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all",
                    checkedItems[idx]
                      ? "border-primary/40 bg-primary/5"
                      : "border-border hover:border-primary/20"
                  )}
                >
                  <div className={cn(
                    "h-8 w-8 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                    checkedItems[idx] ? "bg-primary text-primary-foreground" : "bg-muted"
                  )}>
                    {checkedItems[idx] ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4 text-muted-foreground" />}
                  </div>
                  <p className={cn("text-sm font-medium", checkedItems[idx] && "text-primary")}>{item.label}</p>
                </motion.button>
              );
            })}
          </div>

          {/* Caption Copy Box */}
          <div className="bg-muted/50 rounded-xl border border-border/50 p-4 space-y-3">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Ready-to-use caption</p>
            <p className="text-sm text-foreground whitespace-pre-line leading-relaxed">{CAPTION_TEXT}</p>
            <Button variant="outline" size="sm" onClick={handleCopy} className="gap-2">
              {copied ? <><Check className="h-3.5 w-3.5" /> Copied!</> : <><Copy className="h-3.5 w-3.5" /> Copy Caption</>}
            </Button>
          </div>

          {/* Instagram Spotlight */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-secondary/30 bg-secondary/5 p-5 space-y-2"
          >
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="font-heading text-sm font-bold text-foreground">🎯 Daily Instagram Spotlight</p>
                <p className="text-xs text-muted-foreground">Every day, selected entries are reshared on @nested.money Stories.</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Parents who follow us and tag correctly get featured first.</p>
            <p className="text-sm font-medium text-primary">👉 Check @nested.money today to see if your child is featured</p>
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-10 md:py-14 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl space-y-6">
          <div className="text-center space-y-1">
            <h2 className="font-heading text-xl font-bold text-foreground">🏆 Awards & Recognition</h2>
            <p className="text-sm text-muted-foreground">Recognition, features, and winners are announced on Instagram.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {AWARDS.map((award, idx) => {
              const Icon = award.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={cn("rounded-xl border-2 p-5 text-center space-y-3", award.color)}
                >
                  <div className="flex justify-center">
                    <Icon className={cn("h-8 w-8", award.iconColor)} />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-bold text-foreground">{award.title}</p>
                    {award.subtitle && <p className="text-xs text-muted-foreground">{award.subtitle}</p>}
                  </div>
                  <p className="text-xs text-muted-foreground">{award.description}</p>
                  <p className="text-xs font-semibold text-foreground">🎖 {award.prize}</p>
                </motion.div>
              );
            })}
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Likes are counted till 15th March 2025. Winners and certificates announced on <span className="font-semibold">@nested.money</span> Instagram.
          </p>
        </div>
      </section>

      {/* Education Calculator Transition */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center space-y-4 mb-8">
            <div className="flex justify-center">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Rocket className="h-7 w-7 text-primary" />
              </div>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              🚀 From Dreamer to Achiever
            </h2>
            <p className="text-base text-muted-foreground font-medium">
              Applause matters today. Preparation matters for life.
            </p>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              A future {entry.dream_career === "Other" ? (entry.dream_career_other || "dreamer") : entry.dream_career.toLowerCase()} in {futureYear} will need very different support than today.
              See what it could take to fund your child's dream.
            </p>
          </div>

          {/* Embedded Education Calculator */}
          <div className="space-y-3">
            <h3 className="text-center font-heading text-lg font-semibold text-foreground">
              What Will It Take to Support Your Child's Dream?
            </h3>
            <EducationJourney compact />
          </div>
        </div>
      </section>

      {/* Footer */}
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
