import type { Metadata } from "next";

type genMetaDataParams = {
  title: string;
  description: string;
  url: string;
};

export default function genMetaData({
  title,
  description,
  url,
}: genMetaDataParams): Metadata {
  return {
    title: title,
    description: description,
    openGraph: {
      title: `${title} | Anthony Liang`,
      description: description,
      url: url,
      images: "/opengraph-image.png",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Anthony Liang`,
      description: description,
      images: "/twitter-image.png",
    },
  };
}
