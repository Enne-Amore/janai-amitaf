import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Janai Amitáf Produções",
  description: "Janai Amitáf Produções apresenta seu portfólio web com seus projetos, serviços, produtos, e demais trabalhos artísticos",
  openGraph: {
    title: "Janai Amitáf Produções - Portfólio Web",
    description: "Janai Amitáf Produções apresenta seu portfólio web com seus projetos, serviços, produtos, e demais trabalhos artísticos",
    images: ['../assets/logo.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
