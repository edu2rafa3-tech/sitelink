import type { Metadata } from 'next';
import { Geist_Mono, Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Achadinhos & Ofertas do Dia',
  description:
    'Grupo de ofertas com achadinhos de moda, looks selecionados, cupons e tendências.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${nunito.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
