
-- Create table for ebook chapter sign-ups
CREATE TABLE public.ebook_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  CONSTRAINT ebook_signups_email_unique UNIQUE (email)
);

-- Enable RLS
ALTER TABLE public.ebook_signups ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public sign-up form)
CREATE POLICY "Anyone can sign up for the ebook"
  ON public.ebook_signups
  FOR INSERT
  WITH CHECK (true);

-- No select/update/delete for public users
