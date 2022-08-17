// imports
import { useContext, useState, useEffect } from "react"
import { CatsContext } from "../contexts/cats"
import { CartContext } from '../contexts/Cart'
import { useParams } from 'react-router-dom';
// comp start
const Cat = () => {
   const { cat } = useParams()
   const { catsList } = useContext(CatsContext)
   const [category, setCategory] = useState(catsList[cat])
   const {AddToCart} = useContext(CartContext)
   // fetch cat
   useEffect( () => {
       setCategory(catsList[cat])
    },[catsList, cat])
    return (
        <>
        <div className="row g-3 py-5">
            { category?.map( (singleCat) => {
                const {id, name, imageUrl, price} = singleCat
                return (
                    <div key={id} className="col-lg-3 col-md-4">
                    <div className="card">
                        <img src={imageUrl} className="card-img-top" alt={name} />
                        <div className="card-body">
                            <span className='fw-bold'>{name}</span>
                            <span className="float-end fw-bold">{price}$</span>
                            <button onClick={ () => AddToCart(singleCat)} className="btn btn-dark d-block m-auto mt-4">add to cart</button>
                        </div>
                    </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Cat