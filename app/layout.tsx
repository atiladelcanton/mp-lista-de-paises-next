import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import logotipo from '@/app/_assets/logotipo.svg';
import './globals.css';
import Image from 'next/image';

const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lista de paises',
  description: 'Lista de paises criada com next13',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${nunitoSans.className} antialiased`}>
        <main className='flex flex-col  items-center bg-gray-100 min-h-screen'>
          <nav className='w-full bg-white h-16 flex items-center justify-center'>
            <section className='container flex items-center gap-3'>
              <Image src={logotipo} alt='Lista de Paises' width={48} />
              <h1 className='font-bold text-2xl'>Lista de Paises</h1>
            </section>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
