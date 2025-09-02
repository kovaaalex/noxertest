import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Nav from './components/Nav/Nav';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';
import { useProducts } from './hooks/useProducts';
import banner from '../public/assets/img/banner.png';
import { useState, useMemo, useCallback } from 'react';
import type { ICategory } from './types/categories.type';
import SearchResults from './components/SearchResults/SearchResult';

function App() {
  const { products, loading, error } = useProducts();
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const [searchValue, setSearchValue] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const popularSearches = [
    'Смартфоны',
    'Ноутбуки',
    'Наушники',
    'Телевизоры',
    'Фотокамеры',
  ];

  const uniqueCategories = useMemo(() => {
    const categoryMap = new Map<number, ICategory>();
    products.forEach((product) => {
      product.categories.forEach((category) => {
        if (!categoryMap.has(category.Category_ID)) {
          categoryMap.set(category.Category_ID, category);
        }
      });
    });
    return Array.from(categoryMap.values()).sort(
      (a, b) => a.sort_order - b.sort_order
    );
  }, [products]);

  const handleCategorySelect = useCallback((categoryId: number | null) => {
    setSelectedCategoryId(categoryId);
  }, []);

  const handleSearchChange = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const handleSearchFocus = useCallback(() => {
    setIsSearchFocused(true);
  }, []);

  const handleSearchBlur = useCallback(() => {
    setTimeout(() => setIsSearchFocused(false), 200);
  }, []);

  const handlePopularSearch = useCallback((term: string) => {
    setSearchValue(term);
    setIsSearchFocused(false);
  }, []);
  const handleCloseSearch = useCallback(() => {
    setSearchValue('');
    setIsSearchFocused(false);
  }, []);
  const filteredProducts = useMemo(() => {
    if (searchValue) {
      return products.filter((product) =>
        product.Product_Name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    if (!selectedCategoryId) return products;
    return products.filter((product) =>
      product.categories.some(
        (category) => category.Category_ID === selectedCategoryId
      )
    );
  }, [products, selectedCategoryId, searchValue]);

  if (error) {
    return (
      <>
        <Header />
        <Nav />
        <main>
          <Input
            value={searchValue}
            onChange={handleSearchChange}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          />
          <div className="error">Ошибка загрузки: {error}</div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <div className="app">
      <Header />
      <Nav isSearchActive={isSearchFocused} onCloseSearch={handleCloseSearch} />
      <main>
        <Input
          value={searchValue}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />

        {isSearchFocused ? (
          <SearchResults
            searchValue={searchValue}
            popularSearches={popularSearches}
            onPopularSearch={handlePopularSearch}
            products={filteredProducts}
          />
        ) : (
          <>
            <img src={banner} alt="banner" className="banner" />
            <Categories
              categories={uniqueCategories}
              onCategorySelect={handleCategorySelect}
              selectedCategoryId={selectedCategoryId}
            />
            <Products
              products={filteredProducts}
              selectedCategoryId={selectedCategoryId}
              loading={loading}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
