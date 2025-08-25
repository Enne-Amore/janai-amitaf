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
  openGraph: {
    title: "Janai Amitáf Produções",
    description:
      "Janai Amitáf Produções apresenta seu portfólio web com seus projetos, serviços, produtos, e demais trabalhos artísticos",
    images: ["https://github.com/Enne-Amore/janai-amitaf/blob/main/docs/favicon/logo.png?raw=true"],
  },
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

        <GoogleAnalytics gaId="G-XYZ" />

        <GoogleTagManager gtmId="GTM-XYZ" />

        <Analytics />
      </body>
    </html>
  );
}
