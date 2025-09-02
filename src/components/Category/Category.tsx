import React from 'react';
import styles from './Category.module.css';
import notdownload from '../../../public/assets/img/notdownload.jfif';
import type { CategoryProps } from '../../types/categories.type';

const Category: React.FC<CategoryProps> = ({
  category,
  isSelected,
  onClick,
}) => {
  return (
    <li
      className={`${styles.categoryItem} ${isSelected ? styles.active : ''}`}
      onClick={() => onClick(category.Category_ID)}
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
  );
};
export default Category;
