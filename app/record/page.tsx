import RecordCard from '@/components/RecordCard';
import { allRecords } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export default function Record() {
  const records = allRecords.sort((a, b) =>
    compareDesc(new Date(a.publishAt), new Date(b.publishAt)),
  );

  return (
    <div>
      <div>
        <h1 className='text-xl md:text-2xl font-semibold'>기록</h1>
        <p className='mt-2 text-sm md:text-base text-slate-500 dark:text-slate-300'>
          일상 그리고 생각을 정리하기 위해서 기록합니다. 🌈✨
        </p>
      </div>
      <ul className='mt-12'>
        {records.map((record) => (
          <RecordCard key={record._id} record={record} />
        ))}
      </ul>
    </div>
  );
}
