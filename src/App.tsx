import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Input from './components/Input/Input'
import Nav from './components/Nav/Nav'
import Categories from './components/Categories/Categories'
import Products from './components/Products/Products'
import { useProducts } from './hooks/useProducts'
import banner from '../public/assets/img/banner.png'
import { useState, useMemo, useCallback } from 'react'
import type { Category } from './types/categories.type'

function App() {
  const { products, loading, error } = useProducts()
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null)

  const uniqueCategories = useMemo(() => {
    const categoryMap = new Map<number, Category>()
    products.forEach(product => {
      product.categories.forEach(category => {
        if (!categoryMap.has(category.Category_ID)) {
          categoryMap.set(category.Category_ID, category)
        }
      })
    })
    return Array.from(categoryMap.values()).sort((a, b) => a.sort_order - b.sort_order)
  }, [products])

  const handleCategorySelect = useCallback((categoryId: number | null) => {
    setSelectedCategoryId(categoryId)
  }, [])

  const filteredProducts = useMemo(() => {
    if (!selectedCategoryId) return products
    return products.filter(product =>
      product.categories.some(category => category.Category_ID === selectedCategoryId)
    )
  }, [products, selectedCategoryId])

  if (error) {
    return (
      <>
        <Header/>
        <Nav/>
        <main>
          <Input/>
          <div className="error">Ошибка загрузки: {error}</div>
        </main>
        <Footer/>
      </>
    )
  }

  return (
    <div className='app'>
      <Header/>
      <Nav/>
      <main>
        <Input/>
        <img src={banner} alt="banner" className="banner"/>
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
      </main>
      <Footer/>
    </div>
  )
}

export default App