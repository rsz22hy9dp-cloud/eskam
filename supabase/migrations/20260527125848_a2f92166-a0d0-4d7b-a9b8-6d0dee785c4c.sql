-- Restrict contact_messages SELECT to admins only (explicit policy)
CREATE POLICY "Admins can view contact messages"
ON public.contact_messages
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role));

-- Drop the broad public SELECT policy on the ebook storage bucket.
-- Public buckets still serve files via /storage/v1/object/public/<bucket>/<path>
-- without a SELECT policy; this only removes the ability to list bucket contents.
DROP POLICY IF EXISTS "Ebook files are publicly accessible" ON storage.objects;