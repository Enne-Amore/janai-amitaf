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
    images: ["https://file.notion.so/f/f/8e94c5ee-34b2-42f2-9819-2827a3d9c49c/05d8edaf-3316-4296-a61b-7dbc1996ae00/image.png?table=block&id=2557c96a-496e-8011-af89-f54f6b0a180a&spaceId=8e94c5ee-34b2-42f2-9819-2827a3d9c49c&expirationTimestamp=1755734400000&signature=l_Dd9YvJkND7Nb0j1jdSa1Tr5Ruae_Ocbg-SDs4o1yY&downloadName=image.png"],
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
