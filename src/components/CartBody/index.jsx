// imports
// comp start
const CartBody = ({item}) => {
    const { name, imageUrl, quantity, price } = item
    return (
        <>
        <div className="cart-items d-flex p-3">
            <img src={imageUrl} alt={name} />
            <div className='ms-3'>
            <p className='fw-bold'>{name}</p>
            <p className='fw-bold'>{`${quantity} x ${price}`} </p>
            </div>
        </div>
        </>
    )
}
export default CartBody