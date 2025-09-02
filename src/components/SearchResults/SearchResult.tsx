import React from 'react'
import styles from './SearchResults.module.css'
import type { Product } from '../../types/product.types'
import input from '../../../public/assets/img/input.svg';
interface SearchResultsProps {
  searchValue: string
  popularSearches: string[]
  onPopularSearch: (term: string) => void
  products: Product[]
}

const SearchResults: React.FC<SearchResultsProps> = ({
  searchValue,
  popularSearches,
  onPopularSearch,
  products
}) => {
  return (
    <div className={styles.searchResults}>
      {!searchValue ? (
        <div className={styles.popularSection}>
          <h3 className={styles.sectionTitle}>Часто ищут</h3>
          <ul className={styles.popularList}>
            {popularSearches.map((term, index) => (
              <li
                key={index}
                className={styles.popularItem}
                onClick={() => onPopularSearch(term)}
              >
                <img src={input} alt="input" />
                <p>{term}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.resultsSection}>
          <h3 className={styles.sectionTitle}>
            Результаты поиска: "{searchValue}"
          </h3>
          {products.length === 0 ? (
            <p className={styles.noResults}>Ничего не найдено</p>
          ) : (
            <div className={styles.productsGrid}>
              {products.map(product => (
                <div key={product.Product_ID} className={styles.productCard}>
                  <img
                    src={product.images[0]?.Image_URL}
                    alt={product.Product_Name}
                    className={styles.productImage}
                  />
                  <h4 className={styles.productName}>{product.Product_Name}</h4>
                  <span className={styles.productPrice}>
                    {product.parameters[0]?.price} ₽
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchResults;