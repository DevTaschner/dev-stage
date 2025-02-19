import type { Metadata } from 'next';
import { Montserrat, Oxanium } from 'next/font/google';
import './global.css';

export const metadata: Metadata = {
  title: 'Dev Stage',
  description: 'NLW project 2025',
};

const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-oxanium',
});

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const font_variables = [oxanium.variable, montserrat.variable].join(' ');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font_variables}>
      <body>{children}</body>
    </html>
  );
}
