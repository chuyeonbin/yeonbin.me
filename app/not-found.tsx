import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center' style={{ minHeight: '50vh' }}>
      <h2 className='mb-4 text-2xl'>page not found 404</h2>
      <p className='text-base'>페이지를 찾을 수 없습니다. 😿</p>
      <Link href='/'>{'<-'} 뒤로가기</Link>
    </div>
  );
}
