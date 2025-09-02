import type { Category } from "./categories.type";

export interface ProductImage {
  Image_ID: number;
  Image_URL: string;
  MainImage: boolean;
}

export interface ProductColor {
  Color_ID: number;
  Color_Code: string;
  Color_Name: string;
}

export interface ProductParameter {
  Parameter_ID: number;
  name: string;
  price: number;
  old_price: number | null;
}

export interface ProductMark {
  Mark_ID: number;
  Mark_Name: string;
}

export interface Product {
  Product_ID: number;
  Product_Name: string;
  OnMain: boolean;
  Created_At: string;
  Updated_At: string;
  categories: Category[];
  images: ProductImage[];
  colors: ProductColor[];
  parameters: ProductParameter[];
  marks: ProductMark[];
  tags: string[];
}

export interface ProductsResponse {
  products: Product[];
}