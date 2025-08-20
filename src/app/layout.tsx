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
    images: ["../../public/assets/logo.png"],
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
