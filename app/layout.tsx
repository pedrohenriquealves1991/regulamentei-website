import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Regulamentei - Transformando complexidade em conformidade.",
  description:
    "Porto Alegre, RS - Brasil | Regulamentei | pedro@regulamentei.com.br | +55 (51) 993984165",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
