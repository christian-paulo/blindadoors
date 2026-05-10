import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const SITE_URL = "https://blindadoors.pt";
const SITE_NAME = "BlindaDoors";
const SITE_DESCRIPTION =
  "Fabricante português de portas blindadas 100% personalizadas. Tubo e chapa de aço, fechadura de 7 pontos, isolamento termoacústico. Showroom em São João da Madeira.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BlindaDoors — Portas Blindadas Sob Medida | Fabrico Português",
    template: "%s | BlindaDoors",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "portas blindadas",
    "porta blindada sob medida",
    "fabrico português",
    "São João da Madeira",
    "fechadura 7 pontos",
    "isolamento termoacústico",
    "ENV 1627",
    "porta de segurança",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "BlindaDoors — Portas Blindadas Sob Medida",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BlindaDoors — Portas Blindadas Sob Medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlindaDoors — Portas Blindadas Sob Medida",
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: SITE_URL },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: "+351931911903",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São João da Madeira",
    addressRegion: "Aveiro",
    addressCountry: "PT",
  },
  areaServed: { "@type": "Country", name: "Portugal" },
  priceRange: "€€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
