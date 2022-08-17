// imports
import './productCard.scss'
import { useContext, } from 'react'
import { CartContext } from '../contexts/Cart'
// start comp
const ProductCard = ({cat}) => {
    const {name,price,imageUrl} = cat
    const {AddToCart} = useContext(CartContext)
    const addProductToCart = () => AddToCart(cat)
    return (
        <>
            <div className="col-lg-3 col-md-4">
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <span className='fw-bold'>{name}</span>
                        <span className="float-end fw-bold">{price}$</span>
                        <button onClick={addProductToCart} className="btn btn-dark d-block m-auto mt-4">add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductCard