
-- Create table for #NestedDreamers contest registrations
CREATE TABLE public.contest_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  entry_code TEXT NOT NULL UNIQUE,
  child_name TEXT NOT NULL,
  age_group TEXT NOT NULL,
  dream_career TEXT NOT NULL,
  dream_career_other TEXT,
  parent_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  instagram_handle TEXT NOT NULL,
  pincode TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contest_registrations ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public registration form)
CREATE POLICY "Anyone can submit contest registrations"
ON public.contest_registrations
FOR INSERT
WITH CHECK (true);

-- Allow reading own entry by entry_code (for dashboard page)
CREATE POLICY "Anyone can read by entry code"
ON public.contest_registrations
FOR SELECT
USING (true);
