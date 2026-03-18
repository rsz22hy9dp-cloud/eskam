
-- Create storage bucket for ebook files
INSERT INTO storage.buckets (id, name, public) VALUES ('ebook', 'ebook', true);

-- Allow public read access to ebook files
CREATE POLICY "Ebook files are publicly accessible"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'ebook');
