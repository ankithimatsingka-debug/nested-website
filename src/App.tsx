import { lazy, Suspense } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

// Lazy load all pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const Landing = lazy(() => import("./pages/Landing"));
const Features = lazy(() => import("./pages/Features"));
const FundSelection = lazy(() => import("./pages/FundSelection"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CancellationRefundPolicy = lazy(() => import("./pages/CancellationRefundPolicy"));
const InformationSecurityPolicy = lazy(() => import("./pages/InformationSecurityPolicy"));
const AccountDataDeletionPolicy = lazy(() => import("./pages/AccountDataDeletionPolicy"));
const KYCModification = lazy(() => import("./pages/KYCModification"));
const Taxation = lazy(() => import("./pages/Taxation"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Simple loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
);

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light">
    <TooltipProvider>
      <HashRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/features" element={<Features />} />
            <Route path="/fund-selection" element={<FundSelection />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/terms-and-conditions" element={<TermsOfUse />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cancellation-refund-policy" element={<CancellationRefundPolicy />} />
            <Route path="/information-security-policy" element={<InformationSecurityPolicy />} />
            <Route path="/account-data-deletion-policy" element={<AccountDataDeletionPolicy />} />
            <Route path="/kyc-modification" element={<KYCModification />} />
            <Route path="/taxation" element={<Taxation />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
