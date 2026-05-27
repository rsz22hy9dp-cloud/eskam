import { Helmet } from "react-helmet-async";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function Seo({ title, description, path, type = "website" }: SeoProps) {
  const url = `https://www.eskam.dk${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={path} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
