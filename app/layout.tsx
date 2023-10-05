import type { Metadata } from 'next';
import { pretendard, tossface } from '@/styles/fonts';
import '@/styles/global.css';
import Header from '@/components/Header';
import ThemeProviders from './ThemeProviders';
import ScrollTopButton from './components/ScrollTopButton';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'yeonbin.me | Frontend Engineer',
  description: 'yeonbin.me',
  verification: {
    google: 'DldXn_Qf3RofEbMeGh8ENxD-F00LzXgrNWXpVpkw3MQ',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='ko'
      className={`${tossface.variable} ${pretendard.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProviders>
          <Header />
          <main className='container max-w-screen-md mx-auto px-4 pt-12 md:pt-16'>{children}</main>
          <Footer />
          <ScrollTopButton />
        </ThemeProviders>
      </body>
    </html>
  );
}
