import { Country } from '@/app/page';
import Link from 'next/link';
import back from '@/app/_assets/back.svg';
import Image from 'next/image';
async function getCountryByName(name: string): Promise<Country> {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`,
  );
  return (await response.json())[0];
}

export default async function CountryPage({
  params: { name },
}: {
  params: { name: string };
}) {
  const country = await getCountryByName(name);
  console.log(country);
  return (
    <section className='flex flex-col container'>
      <h1 className='text-5xl text-center font-bold text-gray-800 my-16'>
        {country.translations.por.common}
      </h1>
      <Link
        href={`/`}
        title='Voltar para página inicial'
        className='flex gap-1 my-2'
      >
        <Image src={back} alt='Voltar' /> Voltar
      </Link>
      <article className='flex flex-row justify-between min-w-full p-10 bg-white rounded-xl'></article>
    </section>
  );
}
