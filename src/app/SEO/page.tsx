import React from "react";
import type { Metadata } from "next";

//Static metaData

export const metadata = {
  metadataBase: new URL("https://yoursiteurl.com"),
  //   title: "this is the title",
  title: {
    default: "default title",
    template: "%s | this will show in every page",
  },
  description: "this is the description",
  verification: {
    google: "google-site-verification=123465",
  },
};

//Dynamic metaData

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: any //ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;
  try {
    // fetch data
    const product = await fetch(`https://.../${id}`).then((res) => res.json());

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || [];

    return {
      title: product.title,
      robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
        },
      },
      openGraph: {
        images: ["/some-specific-page-image.jpg", ...previousImages],
      },
      alternates: {
        // canonical: `https://yoursiteurl.com/page/${id}`,
        canonical: `/page/${id}`, //if metadatabase is set in main layout or page
        languages: {
          "en-US": `/en-US/page/${id}`,
        },
      },
      twitter: {
        card: "summary_large_image",
        title: "next13",
        description: "this is a description",
        siteId: "123456",
        creator: "@nextjs",
        creatorId: "123456",
        images: ["https://nextjs.org/og.png"],
      },
    };
  } catch (error) {
    return {
      title: "not found",
    };
  }
}

export default function Index({ params, searchParams }: Props) {
  return <div>Index</div>;
}
