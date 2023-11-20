import Link from 'next/link';
import { Note } from 'contentlayer/generated';
import dateFormat from 'app/util/date';

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <li className='p-3 border-b dark:border-slate-300/20'>
      <Link href={`Note/${note.slug}`} className='group'>
        <div>
          <div>
            <span className='text-slate-500 text-sm md:text-base'>
              {dateFormat(note.publishAt)}
            </span>
            <h3 className='mt-2 text-lg md:text-xl font-semibold group-hover:text-indigo-700 dark:group-hover:text-indigo-300 line-clamp-1'>
              {note.title}
            </h3>
            {note.tags.length > 0 ? (
              <ul className='mt-5 flex flex-wrap  text-xs md:text-sm  text-slate-500/60'>
                {note.tags.map((tag) => (
                  <li className='mr-4' key={tag}>
                    #<span>{tag}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <p className='mt-2 text-sm md:text-base text-slate-500 line-clamp-3'>
              {note.description}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}
