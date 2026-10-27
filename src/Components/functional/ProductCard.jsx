
function ProductCard({ product, onDelete, onUpdateStock }) {
  return (
    <div className="product-card">
      <div className="product-card-header">
        <div className="product-icon">📦</div>

        <span
          className={
            product.stock === 0
              ? 'stock-badge out-stock'
              : product.stock <= 5
              ? 'stock-badge low-stock'
              : 'stock-badge in-stock'
          }
        >
          {product.stock === 0
            ? 'Out of Stock'
            : product.stock <= 5
            ? 'Low Stock'
            : 'In Stock'}
        </span>
      </div>

      <h3>{product.name}</h3>

      <p className="product-category">{product.category}</p>

      <div className="product-details">
        <p>
          <span>Price</span>
          <strong>Rs. {product.price.toLocaleString()}</strong>
        </p>

        <p>
          <span>Available Stock</span>
          <strong>{product.stock} units</strong>
        </p>
      </div>

      <div className="product-card-buttons">
        <button
          className="stock-button"
          onClick={() => onUpdateStock(product.id)}
        >
          + Add Stock
        </button>

        <button
          className="delete-button"
          onClick={() => onDelete(product.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default ProductCard
