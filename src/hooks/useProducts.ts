import { useState, useEffect } from 'react';
import type { Product } from '../types/product.types';
import type { Category } from '../types/categories.type';
import { API_BASE } from '../const/api';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE}/products?on_main=true`);
        
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        
        // Преобразуем данные в наш формат
        const formattedProducts: Product[] = data.products || [];
        setProducts(formattedProducts);
        
        // Извлекаем уникальные категории
        const allCategories: Category[] = [];
        formattedProducts.forEach(product => {
          product.categories.forEach(category => {
            if (!allCategories.find(c => c.Category_ID === category.Category_ID)) {
              allCategories.push(category);
            }
          });
        });
        
        // Сортируем категории по sort_order
        allCategories.sort((a, b) => a.sort_order - b.sort_order);
        setCategories(allCategories);
        
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, categories, loading, error };
};