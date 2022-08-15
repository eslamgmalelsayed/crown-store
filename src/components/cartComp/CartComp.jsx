// imports
import './CartComp.scss'
import {ReactComponent as Cart } from '../../assets/images/cart.svg'
import { useState, useEffect, useRef } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
import {useClickAway} from 'react-use';
import { Link } from "react-router-dom";
// comp start
const CartComp = () => {
    const[showCart, setShowCart] = useState(false)
    // init AOS
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
    // click outside
    const ref = useRef()
    useClickAway(ref, () => {
      setShowCart(!showCart)
    });
    return (
        <>
        <div className='cart-wrapper'>
            <Cart
              className='cart-icon'
              onClick={ () => setShowCart(!showCart) }
              role='button'
            />
            { showCart &&
            <div
            data-aos="fade" 
            ref={ref}
            className="cart-items-wrapper text-center"
            >
                <div className="cart-items d-flex p-3">
                    <img src="../../assets/images/cart.svg" alt="" />
                    <div className='ms-3'>
                    <p className='fw-bold'>xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                    <p className='fw-bold'>3 x 5$</p>
                    </div>
                </div>
            <Link to='/cart' className='btn btn-dark text-white m-auto w-100'>Go To Checkout</Link>
            </div>
            }
        </div>
        </>
    )
}
export default CartComp