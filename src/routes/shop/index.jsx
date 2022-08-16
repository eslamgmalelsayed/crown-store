// imports
import { useContext } from 'react';
import {ProductsContext} from '../../components/contexts/products'
import ProductCard from '../../components/productCard';
// app start
const Shop = () => {
  const { productsList } = useContext(ProductsContext)
  return (
    <div className="shop py-5">
      <div className='row g-3'>
        {productsList.map( (product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default Shop;
