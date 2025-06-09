'use client'

import { useEffect } from 'react';
import Header from '@/app/lib/header';
import { getContentFul } from './api/requests';



export default function Home() { 

  useEffect(() => {
    getContentFul().then((data) => {
    console.log(data);
  }).catch((error) => {
    console.error('Error fetching content:', error);
  });
  }, [])
  

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header title={'Things'}/>
    </div>
  );
}
