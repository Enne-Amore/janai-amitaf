import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Janai Amitáf Produções",
  description: "Janai Amitáf Produções apresenta seu portfólio web com seus projetos, serviços, produtos, e demais obras artísticas",
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
