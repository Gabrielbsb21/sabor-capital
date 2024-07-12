import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

// IMPORT COMPONENTS
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sabor Capital',
  description:
    'Explore a rica tapeçaria gastronômica de Brasília com o nosso guia culinário online.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
