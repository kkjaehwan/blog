'use client';
import { site_default } from '@/constants/constants';
import Head from 'next/head';
import { usePathname } from 'next/navigation';

const CommonSEO = ({
  title,
  description,
  ogType,
  ogImage,
}: {
  title: string;
  description: string;
  ogType: string;
  ogImage: string;
}) => {
  const pathname = usePathname();
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta
        property="og:url"
        content={`${site_default.siteMetadata.siteUrl}${pathname}`}
      />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={site_default.siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImage} key={ogImage} />
    </Head>
  );
};

export const PageSEO = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const ogImageUrl =
    site_default.siteMetadata.siteUrl + site_default.siteMetadata.socialBanner;
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
    />
  );
};
