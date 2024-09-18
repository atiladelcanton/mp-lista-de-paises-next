'use client';

import Link from 'next/link';
import back from '@/app/_assets/back.svg';
import Image from 'next/image';

export default function Error() {
  return (
    <section className='flex flex-col container'>
      <h1 className='text-5xl text-center font-bold text-gray-800 my-16'>
        Ops, ocorreu um erro ao exibir esse país!
      </h1>
      <Link
        href={`/`}
        title='Voltar para página inicial'
        className='flex gap-1 my-2'
      >
        <Image src={back} alt='Voltar' /> Voltar
      </Link>
    </section>
  );
}
