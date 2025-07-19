import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Kalika Furniture - Premium Furniture & Home Furnishings",
  description: "Discover exquisite furniture, curtains, blinds, mattresses, and home furnishings from Kalika Furniture. Quality craftsmanship meets modern design. Free delivery across India.",
  keywords: "furniture, home furnishings, sofas, beds, dining sets, curtains, blinds, mattresses, kalika furniture, interior design, furniture store",
  authors: [{ name: "Kalika Furniture" }],
  creator: "Kalika Furniture",
  publisher: "Kalika Furniture",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kalikafurniture.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Kalika Furniture - Premium Furniture & Home Furnishings",
    description: "Discover exquisite furniture, curtains, blinds, mattresses, and home furnishings from Kalika Furniture. Quality craftsmanship meets modern design.",
    url: 'https://kalikafurniture.vercel.app',
    siteName: 'Kalika Furniture',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kalika Furniture - Premium Furniture Store',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kalika Furniture - Premium Furniture & Home Furnishings",
    description: "Discover exquisite furniture, curtains, blinds, mattresses, and home furnishings from Kalika Furniture. Quality craftsmanship meets modern design.",
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#C2B280" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Kalika Furniture" />
        <meta name="application-name" content="Kalika Furniture" />
        <meta name="msapplication-TileColor" content="#C2B280" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className="antialiased bg-white text-neutral-900">
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
