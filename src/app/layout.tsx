import type { Metadata } from "next";
import "./globals.css";
import { Roboto, Poppins } from 'next/font/google';
import path from "path";

export const metadata: Metadata = {
  title: "Zerium",

  description:
    "A Zerium é especialista na criação de sites, aplicativos, e-commerce e soluções digitais para turbinar seu negócio e fortalecer sua marca.",

  openGraph: {
    title: "Zerium",
    description:
      "A Zerium é especialista na criação de sites, aplicativos, e-commerce e soluções digitais para turbinar seu negócio e fortalecer sua marca.",
    url: "https://www.zerium.com.br/",
    siteName: "Zerium",
    images: [
      {
        url: "/assets/images/banner-redes-sociais.png",
        width: 1200,
        height: 630,
        alt: "Zerium - Soluções digitais para seu negócio",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  icons: {
    icon: [
      { url: "/assets/icons/logo-zerium.svg", type: "image/svg+xml" },
      {
        url: "/assets/icons/logo-zerium-32x32",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/icons/logo-zerium-32x32",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: {
      url: "/assets/icons/logo-zerium.svg",
      type: "image/svg+xml",
    },
    shortcut: "/icon-16x16.png",
  },
};

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal' , 'italic'],
  variable: '--font-main',
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-secondary",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`scroll-smooth ${roboto.variable} ${poppins.variable}`}>
      <body className="relative">{children}</body>
    </html>
  );
}
