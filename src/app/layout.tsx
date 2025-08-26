import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Janai Amitáf Produções",
  description:
    "Janai Amitáf Produções apresenta seu portfólio web com seus projetos, serviços, produtos, e demais trabalhos artísticos",
  authors: [{ name: "Janai Amitáf Produções", url: "https://janai-amitaf.vercel.app" }],
  openGraph: {
    type: "website",
    title: "Janai Amitáf Produções",
    description:
      "Janai Amitáf Produções apresenta seu portfólio web com seus projetos, serviços, produtos, e demais trabalhos artísticos",
    images: ["https://github.com/Enne-Amore/janai-amitaf/blob/main/docs/favicon/logo.png?raw=true"],
    url: "https://janai-amitaf.vercel.app",
    siteName: "Janai Amitáf Produções"
  },
  twitter: {
    card: "summary_large_image",
    site: "https://janai-amitaf.vercel.app",
    title: "Janai Amitáf Produções",
    description: "Janai Amitáf Produções apresenta seu portfólio web com seus projetos, serviços, produtos, e demais trabalhos artísticos",
    images: "https://github.com/Enne-Amore/janai-amitaf/blob/main/public/favicon/logo.png?raw=true"
  },
  icons: {
    icon: "/public/favicon/favicon-32x32.png",
    apple: "/public/favicon/apple-touch-icon.png",
  },
  manifest: "/public/favicon/site.webmanifest",
  verification: {
    google: "N2dwzMN_2Th96csMroFlIe8sR3g7oWyBad-oQcxxWxA"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>
        <Header />

        {children}

        <Footer />

        <GoogleAnalytics gaId="G-MSNZ7WHXYV" />

        <GoogleTagManager gtmId="GTM-K5LJ6R4V" />

        <Analytics />
      </body>
    </html>
  );
}
