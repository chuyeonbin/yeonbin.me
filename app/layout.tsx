import type { Metadata } from 'next';
import { pretendard, tossface } from '@/styles/fonts';
import '@/styles/global.css';
import Header from '@/components/Header';
import ThemeProviders from './ThemeProviders';
import ScrollTopButton from './components/ScrollTopButton';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | yeonbin.me',
    default: 'yeonbin.me | Frontend Engineer',
  },
  description: '개발 공부와 생각정리 그리고 일상을 공유하는 공간',
  verification: {
    google: 'DldXn_Qf3RofEbMeGh8ENxD-F00LzXgrNWXpVpkw3MQ',
  },
  applicationName: 'blog',
  authors: [{ name: 'chuyeonbin' }],
  publisher: 'chuyeonbin',
  robots: 'index, follow',
  openGraph: {
    title: 'yeonbin homepage',
    description: '개발 공부와 생각정리 그리고 일상을 공유하는 공간',
    url: 'https://yeonbin.me',
    siteName: 'yeonbin blog',
    images: [
      {
        url: 'https://yeonbin.me/images/base.jpeg',
        width: 800,
        height: 600,
      },
      {
        url: 'https://yeonbin.me/images/base.jpeg',
        width: 1800,
        height: 1600,
        alt: 'yeonbin.me',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
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
