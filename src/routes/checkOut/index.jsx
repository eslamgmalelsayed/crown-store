// imports
import './checkOut.scss'
import { useContext } from "react";
import { CartContext } from "../../components/contexts/Cart";
// app start
const CheckOut = () => {
  const {cartItems, AddToCart, removeFromCart, eraseAll, total} = useContext(CartContext)
  return (
    <div className="checkOut py-5 fw-bold text-center">
      <div className="row m-auto border-bottom">
        <div className="col-2">product</div>
        <div className="col-2">desc</div>
        <div className="col-2">quantity</div>
        <div className="col-2">price</div>
        <div className="col-2">remove</div>
      </div>
          { cartItems &&
            cartItems.map(item => {
              const {id, imageUrl, name, price, quantity} = item
              return (
                  <div key={id} className="row m-auto py-4 border-bottom align-items-center">
                    <div className="col-2"><img src={imageUrl} alt={name} /></div>
                    <div className="col-2">{name}</div>
                    <div className="col-2">{quantity}</div>
                    <div className="col-2 responsive-font">
                      <i onClick={() => removeFromCart(item)} className="bi bi-chevron-left"></i> {price * quantity}
                      <i onClick={() => AddToCart(item)} className="bi bi-chevron-right"></i>
                    </div>
                    <div className="col-2">
                      <i onClick={() => eraseAll(item)} className="bi text-danger bi-trash3-fill"></i>
                      </div>
                  </div>
                )
              })
            }
            <h2 className='total my-3'>{`total : ${total} $`}</h2>
            { cartItems.length == 0 &&
             <h1 className='py-5 my-5 bg-warning text-white'>no items to display yet</h1>          
            }         
    </div>
  );
}

export default CheckOut;
