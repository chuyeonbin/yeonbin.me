import Link from 'next/link';
import { Log } from 'contentlayer/generated';
import { dateFormat } from 'app/util/date';

interface RecentLogProps {
  log: Log;
}

export default function RecentLog({ log }: RecentLogProps) {
  return (
    <li className='p-3 border-b dark:border-slate-300/20'>
      <Link href={`blog/${log.slug}`} className='group'>
        <div className=''>
          <div>
            <span className='text-slate-500 text-sm md:text-base'>{dateFormat(log.publishAt)}</span>
            <h3 className='mt-2 text-lg md:text-xl font-semibold group-hover:text-indigo-700 dark:group-hover:text-indigo-300 line-clamp-1'>
              {log.title}
            </h3>
            {log.tags.length > 0 ? (
              <ul className='mt-5 flex flex-wrap space-x-2 text-xs md:text-sm  text-slate-500/60'>
                {log.tags.map((tag) => {
                  return (
                    <li key={tag}>
                      #<span>{tag}</span>
                    </li>
                  );
                })}
              </ul>
            ) : null}
            <p className='mt-2 text-sm md:text-base font-semibold text-slate-400 line-clamp-3'>
              {log.description}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}
