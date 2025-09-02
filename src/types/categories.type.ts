export interface ICategory {
  Category_ID: number;
  Category_Image: string;
  Category_Name: string;
  sort_order: number;
}
export interface CategoryProps {
  category: ICategory;
  isSelected: boolean;
  onClick: (categoryId: number) => void;
}
export interface CategoriesProps {
  categories: ICategory[];
  onCategorySelect: (categoryId: number | null) => void;
  selectedCategoryId: number | null;
}
