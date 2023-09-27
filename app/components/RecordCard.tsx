import Link from 'next/link';
import { Record } from 'contentlayer/generated';
import dateFormat from 'app/util/date';

interface RecordCardProps {
  record: Record;
}

export default function RecordCard({ record }: RecordCardProps) {
  return (
    <li className='p-3 border-b dark:border-slate-300/20'>
      <Link href={`record/${record.slug}`} className='group'>
        <div>
          <div>
            <span className='text-slate-500 text-sm md:text-base'>
              {dateFormat(record.publishAt)}
            </span>
            <h3 className='mt-2 text-lg md:text-xl font-semibold group-hover:text-indigo-700 dark:group-hover:text-indigo-300 line-clamp-1'>
              {record.title}
            </h3>
            {record.tags.length > 0 ? (
              <ul className='mt-5 flex flex-wrap  text-xs md:text-sm  text-slate-500/60'>
                {record.tags.map((tag) => (
                  <li className='mr-4' key={tag}>
                    #<span>{tag}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <p className='mt-2 text-sm md:text-base font-semibold text-slate-400 line-clamp-3'>
              {record.description}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}
