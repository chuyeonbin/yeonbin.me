import React from 'react';

export default function HomeProfile() {
  return (
    <div className='px-8 py-12 h-60 rounded-lg bg-no-repeat bg-cover bg-[url(../public/gif/light.gif)] dark:bg-[url(../public/gif/dark.gif)] text-slate-900 dark:text-white '>
      <h1 className='text-xl md:text-2xl font-semibold opacity-90'>Yeonbin Chu | 추연빈</h1>
      <h2 className='text-lg font-medium opacity-90'>Frontend Engineer</h2>
      <p className='mt-5 font-medium opaccity-80'>
        최신 기술을 배우는 것을 좋아하고, 배우고 성장하면서 얻는 성취감을 맛 봤을 때 가장 큰 보람을
        느낍니다. 커피☕️ 마시면서 코딩하는걸 좋아합니다. 독서📚 하는 걸 좋아해요.
      </p>
    </div>
  );
}
