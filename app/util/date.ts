import { format, parseISO } from 'date-fns';

export default function dateFormat(publishAt: string) {
  return format(parseISO(publishAt), 'yyyy년 MM월 dd일 HH:mm');
}
