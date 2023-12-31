import Script from 'next/script';
import type { Metadata } from 'next';
import { pretendard } from '@/styles/fonts';
import '@/styles/global.css';
import '@/styles/tossface.css';
import Header from '@/components/Header';
import ThemeProviders from './ThemeProviders';
import ScrollTopButton from './components/ScrollTopButton';
import Footer from './components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://yeonbin.me'),
  title: {
    template: '%s | yeonbin.me',
    default: 'yeonbin 블로그 | Frontend Engineer',
  },
  description: '개발 공부 그리고 배웠던 내용을 공유하는 블로그',
  verification: {
    google: 'DldXn_Qf3RofEbMeGh8ENxD-F00LzXgrNWXpVpkw3MQ',
  },
  applicationName: 'blog',
  authors: [{ name: 'chuyeonbin' }],
  publisher: 'chuyeonbin',
  robots: 'index, follow',
  openGraph: {
    title: 'yeonbin 블로그',
    description: '개발 공부 그리고 배웠던 내용을 공유하는 블로그',
    url: 'https://yeonbin.me',
    siteName: 'yeonbin blog',
    images: [
      {
        url: 'images/base.jpeg',
        width: 317,
        height: 427,
        alt: 'base image',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko' className={`${pretendard.variable}`} suppressHydrationWarning>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-00L4MK8HC5' />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-00L4MK8HC5');
        `}
      </Script>
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
