// imports
import './productCard.scss'
// start comp
const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product
    return (
        <>
            <div className="col-lg-3 col-md-4">
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <span className='fw-bold'>{name}</span>
                        <span className="float-end fw-bold">{price}$</span>
                        <button className="btn btn-primary d-block m-auto mt-4">add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductCard