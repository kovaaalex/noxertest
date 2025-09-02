import type { IProduct } from './product.types';

export interface SearchResultsProps {
  searchValue: string;
  popularSearches: string[];
  onPopularSearch: (term: string) => void;
  products: IProduct[];
}
