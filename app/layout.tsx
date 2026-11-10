import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qubags | Kurcalama Kanıtlı Akıllı Ambalaj",
  description:
    "Kurcalama kanıtlı kilit mekanizması ve QR entegrasyonuyla paketleriniz güvende. Gıda, e-ticaret, medikal, giyim, evrak ve kuyumculuk için akıllı ambalaj çözümleri. Ön kayıt için yerinizi ayırtın.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
