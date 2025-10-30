import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import Features from "./pages/Features";
import FundSelection from "./pages/FundSelection";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CancellationRefundPolicy from "./pages/CancellationRefundPolicy";
import InformationSecurityPolicy from "./pages/InformationSecurityPolicy";
import AccountDataDeletionPolicy from "./pages/AccountDataDeletionPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/features" element={<Features />} />
            <Route path="/fund-selection" element={<FundSelection />} />
            <Route path="/terms-and-conditions" element={<TermsOfUse />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cancellation-refund-policy" element={<CancellationRefundPolicy />} />
            <Route path="/information-security-policy" element={<InformationSecurityPolicy />} />
            <Route path="/account-data-deletion-policy" element={<AccountDataDeletionPolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
