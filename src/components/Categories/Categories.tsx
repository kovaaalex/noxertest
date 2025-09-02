import React from 'react';
import styles from './Categories.module.css';
import type { CategoriesProps } from '../../types/categories.type';
import Category from '../Category/Category';

const Categories: React.FC<CategoriesProps> = ({
  categories,
  onCategorySelect,
  selectedCategoryId,
}) => {
  const sortedCategories = [...categories].sort(
    (a, b) => a.sort_order - b.sort_order
  );

  return (
    <ul className={styles.categoriesList}>
      {sortedCategories.map((category) => (
        <Category
          key={category.Category_ID}
          category={category}
          isSelected={selectedCategoryId === category.Category_ID}
          onClick={onCategorySelect}
        />
      ))}
    </ul>
  );
};

export default Categories;
