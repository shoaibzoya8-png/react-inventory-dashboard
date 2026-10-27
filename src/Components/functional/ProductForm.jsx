
import { useEffect, useRef, useState } from 'react'

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')

  const nameInput = useRef(null)

  useEffect(() => {
    nameInput.current.focus()
  }, [])

  function handleSubmit(event) {
    event.preventDefault()

    if (name === '' || category === '' || price === '' || stock === '') {
      alert('Please fill all fields')
      return
    }

    onAddProduct({
      id: Date.now(),
      name: name,
      category: category,
      price: Number(price),
      stock: Number(stock)
    })

    setName('')
    setCategory('')
    setPrice('')
    setStock('')

    nameInput.current.focus()
  }

return (
  <form className="product-form" onSubmit={handleSubmit}>
    <h2 className="form-title">＋ Add New Product</h2>

    <div className="form-fields">
      <div className="form-group">
        <label>Product Name</label>
        <input
          ref={nameInput}
          type="text"
          placeholder="Enter product name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          min="0"
          placeholder="Enter price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Stock Quantity</label>
        <input
          type="number"
          min="0"
          placeholder="Enter stock quantity"
          value={stock}
          onChange={(event) => setStock(event.target.value)}
        />
      </div>

      <button type="submit" className="add-product-btn">
        + Add Product
      </button>
    </div>
  </form>
)

}

export default ProductForm
