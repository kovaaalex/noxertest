import React from 'react';
import styles from './Products.module.css';
import notdownload from '../../../public/assets/img/notdownload.jfif';
import type { Product } from '../../types/product.types';

interface ProductsProps {
  products: Product[];
  selectedCategoryId: number | null;
  loading: boolean;
}

const Products: React.FC<ProductsProps> = ({ products, selectedCategoryId, loading }) => {
  const filteredProducts = selectedCategoryId
    ? products.filter(product =>
        product.categories.some(category => category.Category_ID === selectedCategoryId)
      )
    : products;

  if (loading) return <div className={styles.loading}>Загрузка товаров...</div>;
  if (filteredProducts.length === 0) return <div className={styles.noProducts}>Товары не найдены</div>;

  return (
      <div className={styles.productsGrid}>
        {filteredProducts.map(product => {
          const mainImage = product.images.find(img => img.MainImage) || product.images[0];
          const mainParameter = product.parameters[0];
          const hasDiscount = mainParameter?.old_price !== null;
          const discountPercent = hasDiscount && mainParameter.old_price 
            ? Math.round((1 - mainParameter.price / mainParameter.old_price) * 100)
            : 0;

          return (
            <div key={product.Product_ID} className={styles.productCard}>
              <div className={styles.productImage}>
                <img
                  src={mainImage?.Image_URL || notdownload}
                  alt={product.Product_Name}
                  className={styles.image}
                  onError={(e) => { e.currentTarget.src = notdownload; }}
                />
              </div>
              
              <div className={styles.productInfo}>
                
                <div className={styles.productPrice}>
                  <span className={styles.currentPrice}>
                    {mainParameter?.price || 0} ₽
                  </span>
                  {hasDiscount && mainParameter.old_price && (
                    <>
                      <span className={styles.oldPrice}>
                        {mainParameter.old_price} ₽
                      </span>
                      <span className={styles.discountPercent}>
                        -{discountPercent}%
                      </span>
                    </>
                  )}
                </div>
                <h3 className={styles.productName}>{product.Product_Name}</h3>
                
                <button className={styles.addToCartButton}>Выбрать</button>
              </div>
            </div>
          );
        })}
      </div>
  );
};

export default Products;