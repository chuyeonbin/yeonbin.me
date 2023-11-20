import { Metadata } from 'next';
import NoteCard from '@/components/NoteCard';
import { allNotes } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export const metadata: Metadata = {
  title: '노트',
  description: '에러해결 그리고 학습했던 내용을 적는 노트입니다.',
  openGraph: {
    title: 'yeonbin 기록',
    description: '에러해결 그리고 학습했던 내용을 적는 노트입니다.',
    url: 'https://yeonbin.me/record',
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

export default function Note() {
  const notes = allNotes.sort((a, b) => compareDesc(new Date(a.publishAt), new Date(b.publishAt)));

  return (
    <div>
      <div>
        <h1 className='text-xl md:text-2xl font-semibold'>
          노트 <span className='text-base'>({notes.length})</span>
        </h1>
        <p className='mt-2 text-sm md:text-base text-slate-500 dark:text-slate-300'>
          에러해결 그리고 학습했던 내용을 적는 노트입니다. 💻✨
        </p>
      </div>
      <ul className='mt-12'>
        {notes.map((note) => (
          <NoteCard key={note._id} note={note} />
        ))}
      </ul>
    </div>
  );
}
