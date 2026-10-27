
import {
  useState,
  useContext,
  useRef,
  useMemo,
  useCallback
} from 'react'

import ProductForm from './Components/functional/ProductForm.jsx'
import ProductList from './Components/functional/ProductList.jsx'
import { ThemeContext, ThemeProvider } from './context/ThemeContext'
import AuditLogger from './Components/Class/AuditLogger.jsx'
import './App.css'

function Dashboard() {
  const { darkMode, toggleTheme } = useContext(ThemeContext)

  const auditLogger = useRef(null)

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Laptop',
      category: 'Electronics',
      price: 120000,
      stock: 10
    },
    {
      id: 2,
      name: 'Mouse',
      category: 'Accessories',
      price: 1500,
      stock: 3
    }
  ])

  const lowStockCount = useMemo(() => {
    return products.filter((product) => product.stock <= 5).length
  }, [products])

  const totalStock = useMemo(() => {
    return products.reduce(
      (total, product) => total + product.stock,
      0
    )
  }, [products])

  const addProduct = useCallback((product) => {
    setProducts((previousProducts) => [...previousProducts, product])

    if (auditLogger.current) {
      auditLogger.current.addLog(`Product added: ${product.name}`)
    }
  }, [])

  const deleteProduct = useCallback((id) => {
    setProducts((previousProducts) => {
      const product = previousProducts.find((item) => item.id === id)

      if (auditLogger.current && product) {
        auditLogger.current.addLog(`Product deleted: ${product.name}`)
      }

      return previousProducts.filter((item) => item.id !== id)
    })
  }, [])

  const updateStock = useCallback((id) => {
    setProducts((previousProducts) => {
      const product = previousProducts.find((item) => item.id === id)

      if (auditLogger.current && product) {
        auditLogger.current.addLog(`Stock updated: ${product.name}`)
      }

      return previousProducts.map((item) =>
        item.id === id
          ? { ...item, stock: item.stock + 1 }
          : item
      )
    })
  }, [])

  return (
    <div className={darkMode ? 'dashboard dark-mode' : 'dashboard'}>
      <header>
        <h1>🛒 E-Commerce Inventory Dashboard</h1>
        <p>Manage your products and stock</p>

        <button onClick={toggleTheme}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <section className="metrics">
        <h2>Total Products: {products.length}</h2>

        <h2>Total Stock: {totalStock}</h2>

        <h2>Low Stock Products: {lowStockCount}</h2>
      </section>

      <ProductForm onAddProduct={addProduct} />

      <ProductList
        products={products}
        onDelete={deleteProduct}
        onUpdateStock={updateStock}
      />

      <AuditLogger ref={auditLogger} />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
