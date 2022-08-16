// imports
import './CartComp.scss'
import {ReactComponent as Cart } from '../../assets/images/cart.svg'
import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../contexts/Cart'
import Aos from 'aos'
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import CartBody from '../CartBody';
// comp start
const CartComp = () => {
    // cart items
    const {cartItems, cartCount} = useContext(CartContext)
    // toggle cart
    const[showCart, setShowCart] = useState(false)
    // count

    // init AOS
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
    return (
        <>
        <div className='cart-wrapper'>
            <Cart
              className='cart-icon'
              onClick={ () => setShowCart(!showCart) }
              role='button'
              />
              <span>{cartCount}</span>
            { showCart &&
            <div
            data-aos="fade" 
            className="cart-items-wrapper text-center"
            >
                {/* cart body */}
                { cartItems.map(item => (
                    <CartBody key={item.id} item={item} />
                ))
                }
            <Link to='/checkout' className='btn btn-dark btn-lg text-white mb-2'>Go To Checkout</Link>
            </div>
            }
        </div>
        </>
    )
}
export default CartComp