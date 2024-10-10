import './Cart.css';
import CartItem from './CartItem';

function Cart({cartItems, setCartItems}) {

    let total = 0;
    cartItems.forEach((item) => {
        total += item.price * item.qty;
    });

    return (
        <div className="cart-container box-shadow">
            <h2> Your Order </h2>
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <div className="total"> Total: ${total} </div>
        </div>
    );
}

export default Cart;