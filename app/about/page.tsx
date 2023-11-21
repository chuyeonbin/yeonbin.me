import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '블로그',
  description: '안녕하세요 프론트 엔지니어 추연빈입니다.',
  openGraph: {
    title: 'yeonbin 블로그',
    description: '안녕하세요 프론트 엔지니어 추연빈입니다.',
    url: 'blog',
    siteName: 'yeonbin blog',
    images: [
      {
        url: 'images/base.jpeg',
        width: 800,
        height: 600,
      },
      {
        url: 'images/base.jpeg',
        width: 1800,
        height: 1600,
        alt: 'yeonbin blog',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function About() {
  return (
    <div className='min-h-screen/2'>
      <div className='mb-16'>
        <h1 className='text-xl md:text-2xl font-semibold'>About</h1>
        <p className='mt-2 text-sm md:text-base text-slate-500 dark:text-slate-300'>
          저를 소개합니다.😀
        </p>
      </div>
      <div>
        <div className='flex flex-col items-center md:items-center md:flex-row'>
          <Image
            className='rounded-lg'
            src='/images/base.jpeg'
            alt='소개 이미지'
            width={200}
            height={300}
          />
          <div className='flex flex-col grow'>
            <div className='mt-4 md:mt-0 md:mx-4 grow flex flex-col gap-2 font-medium opaccity-80 text-base'>
              <h2 className='mb-2 text-xl font-semibold'>
                안녕하세요. <span className='text-indigo-700'>프론트엔드 엔지니어</span> 추연빈
                입니다.
              </h2>
              <p>새로운 기술들을 습득하는 것과 적용시키는 것을 좋아합니다.</p>
              <p>데이터 시각화 하는 것에 관심을 가지고 있습니다.</p>
              <p>사용자 경험을 중요시하고, 항상 읽기 좋은 코드를 생각합니다.</p>
              <p>프론트엔드 개발을 주력으로 하고 있지만 백엔드에도 관심을 가지고 있습니다.</p>
              <div className='mt-4 md:ml-0 flex justify-between'>
                <a
                  href='https://www.notion.so/91b878333b3e4d1c8765b5855d0e5140?pvs=4'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-indigo-700 underline underline-offset-4'
                >
                  Notion 포트폴리오 보기
                </a>
                <a
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-indigo-700 underline underline-offset-4'
                >
                  PDF 이력서 준비중...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='mt-4 p-4 bg-indigo-700/30 rounded-lg font-medium text-base text-white'>
        💡 저는 새로운 기술을 배우고 적용 할 때 프로젝트를 만들면서 공부하는 습관을 가지고 있습니다.
        단순히 따라 치는 코드를 사용하는 것이 아닌 기술을 이해하고 사용하는 것이 중요하다고
        생각합니다. 💡
      </p>
    </div>
  );
}
