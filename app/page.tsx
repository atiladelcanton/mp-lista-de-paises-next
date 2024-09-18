import CountryCard from './_components/country-card';

export type Country = {
  name: {
    common: string;
  };
  translations: {
    por: {
      common: string;
    };
  };
  flags: {
    svg: string;
    alt: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  languages?: {
    [key: string]: string;
  };
  borders?: string[];
  cca3: string;
};
async function getCountries(): Promise<Country[]> {
  const response = await fetch('https://restcountries.com/v3.1/all', {
    cache: 'force-cache',
  });
  return response.json();
}

export default async function Home() {
  const countries = await getCountries();

  return (
    <>
      <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full container gap-2 mt-16 '>
        {countries.map(country => (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            ptName={country.translations.por.common}
            flag={country.flags.svg}
            flagAlt={country.flags.alt}
          />
        ))}
      </section>
    </>
  );
}
