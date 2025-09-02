import React from 'react';
import styles from './Products.module.css';
import type { ProductsProps } from '../../types/product.types';
import Product from '../Product/Product';

const Products: React.FC<ProductsProps> = ({
  products,
  selectedCategoryId,
  loading,
}) => {
  const filteredProducts = selectedCategoryId
    ? products.filter((product) =>
        product.categories.some(
          (category) => category.Category_ID === selectedCategoryId
        )
      )
    : products;

  if (loading) return <div className={styles.loading}>Загрузка товаров...</div>;
  if (filteredProducts.length === 0)
    return <div className={styles.noProducts}>Товары не найдены</div>;

  return (
    <div className={styles.productsGrid}>
      {filteredProducts.map((product) => (
        <Product key={product.Product_ID} product={product} />
      ))}
    </div>
  );
};

export default Products;
