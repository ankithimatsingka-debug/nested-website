-- Create table for education calculator email leads
CREATE TABLE public.education_calculator_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  child_age INTEGER,
  selected_college TEXT,
  target_amount BIGINT,
  monthly_sip INTEGER,
  total_investment BIGINT,
  years_to_invest INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.education_calculator_leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert leads (public form)
CREATE POLICY "Anyone can submit education calculator leads"
ON public.education_calculator_leads
FOR INSERT
WITH CHECK (true);

-- Only allow reading leads via service role (for admin access)
-- No SELECT policy for anon users to protect email privacy