import ShowPortofolio from './show';
import { arrayPorto } from '../data/portofolio';

type PageProps = {
  searchParams?: {
    category?: string;
  };
};

export default function PortofolioPage({ searchParams }: PageProps) {
  const category = searchParams?.category;

  const filteredPorto = category
    ? arrayPorto.filter(
        (porto) => porto.category.toLowerCase() === category.toLowerCase()
      )
    : arrayPorto;

  return (
    <ShowPortofolio
      portofolios={filteredPorto}
      activeCategory={category ?? null}
    />
  );
}
