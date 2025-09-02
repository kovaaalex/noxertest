export interface Category {
  Category_ID: number;
  Category_Image: string;
  Category_Name: string;
  sort_order: number;
}

export interface CategoriesProps {
  categories: Category[];
  onCategorySelect: (categoryId: number | null) => void;
  selectedCategoryId: number | null;
}