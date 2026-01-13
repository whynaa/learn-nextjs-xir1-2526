'use client';

import Image from 'next/image';
import Link from 'next/link';

type Porto = {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
};

type Props = {
  portofolios: Porto[];
  activeCategory: string | null;
};

export default function ShowPortofolio({
  portofolios,
  activeCategory,
}: Props) {
  return (
    <main className="container mx-auto">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 min-h-screen">
        <h2 className="text-2xl font-bold tracking-tight text-center text-soft-brown">
          My Portofolio
        </h2>

        {/* Category Filter */}
        <div className="mt-4 mb-6 flex justify-center space-x-4">
          <Link
            href="/portofolio"
            className={`text-soft-brown ${!activeCategory ? 'font-bold' : ''}`}
          >
            All
          </Link>
          <Link
            href="/portofolio?category=website"
            className={`text-soft-brown ${
              activeCategory === 'website' ? 'font-bold' : ''
            }`}
          >
            Web
          </Link>
          <Link
            href="/portofolio?category=mobile"
            className={`text-soft-brown ${
              activeCategory === 'mobile' ? 'font-bold' : ''
            }`}
          >
            Mobile
          </Link>
        </div>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {portofolios.map((porto) => (
            <div key={porto.id} className="group relative">
              <Link href={`/portofolio/${porto.id}`}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:h-80 group-hover:opacity-75">
                  <Image
                    alt={porto.name}
                    src={porto.image}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-sm text-soft-brown">{porto.name}</h3>
                  <p className="mt-1 text-sm text-gray-300">{porto.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
