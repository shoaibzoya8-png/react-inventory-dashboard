
import ProductCard from './ProductCard'
import CardWrapper from './CardWrapper'

function ProductList({ products, onDelete, onUpdateStock }) {
  return (
    <CardWrapper title="Product Inventory">
      {products.length === 0 ? (
        <p>No products available. Add a product!</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDelete={onDelete}
              onUpdateStock={onUpdateStock}
            />
          ))}
        </div>
      )}
    </CardWrapper>
  )
}

export default ProductList

