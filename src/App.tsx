import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Input from './components/Input/Input'
import Nav from './components/Nav/Nav'
import Categories from './components/Categories/Categories'
// import Products from './components/Products/Products'
import { useProducts } from './hooks/useProducts'
import banner from '../public/assets/img/banner.png'
import { useState } from 'react'

function App() {
  const { products, categories, loading, error } = useProducts()
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null)

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
    <>
      <Header/>
      <Nav/>
      <main>
        <Input/>
        <img src={banner} alt="banner" className="banner"/>
        
        <div className="content">
          <aside className="sidebar">
            <Categories
              categories={categories}
              onCategorySelect={setSelectedCategoryId}
              selectedCategoryId={selectedCategoryId}
            />
          </aside>
          
          {/* <section className="main-content">
            <Products
              products={products}
              selectedCategoryId={selectedCategoryId}
              loading={loading}
            />
          </section> */}
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App