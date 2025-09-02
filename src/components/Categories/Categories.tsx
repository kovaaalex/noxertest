import React from 'react';
import styles from './Categories.module.css';
import type { CategoriesProps } from '../../types/categories.type';
import notdownload from '../../../public/assets/img/notdownload.jfif';

const Categories: React.FC<CategoriesProps> = ({
  categories,
  onCategorySelect,
  selectedCategoryId
}) => {
  const sortedCategories = [...categories].sort((a, b) => a.sort_order - b.sort_order);
  
  return (
    <ul className={styles.categoriesList}>
      {sortedCategories.map(category => (
        <li
          key={category.Category_ID}
          className={`${styles.categoryItem} ${selectedCategoryId === category.Category_ID ? styles.active : ''}`}
          onClick={() => onCategorySelect(category.Category_ID)}
        >
          <img
            src={category.Category_Image || notdownload}
            alt={category.Category_Name}
            className={styles.categoryImage}
            onError={(e) => {
              e.currentTarget.src = notdownload;
            }}
          />
          <span className={styles.categoryName}>{category.Category_Name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Categories;