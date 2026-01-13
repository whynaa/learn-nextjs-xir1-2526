import ShowPortofolio from './show';
import { arrayPorto, PortofolioItem } from '../data/portofolio';

type PageProps = {
  searchParams: Promise<{
    category?: string;
  }>;
};

export default async function PortofolioPage({ searchParams }: PageProps) {
  const { category } = await searchParams;

  const filteredPorto: PortofolioItem[] = category
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
