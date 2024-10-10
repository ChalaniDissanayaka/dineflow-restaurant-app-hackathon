import './Cart.css';
import CartItem from './CartItem';

function Cart({cartItems, setCartItems}) {

    let total = 0;
    cartItems.forEach((item) => {
        total += item.price * item.qty;
    });

    const handleAdd = (itemId) => {
        // console.log("item id", itemId);
        const newCartItems = cartItems.map((item) => {
            if (itemId === item.id) {
                return {
                    ...item,
                    qty: item.qty + 1
                };
            }
            return item;
        });


        setCartItems(newCartItems);
    };

    const handleReduce = (itemId) => {
        // console.log("item id", itemId);
        const newCartItems = cartItems.map((item) => {
            if (itemId === item.id && item.qty > 1) {
                return {
                    ...item,
                    qty: item.qty - 1
                };
            }
            return item;
        });

        
        setCartItems(newCartItems);
    };


    const handleRemove = (itemId) => {
        const newCartItems = cartItems.filter((item) => {
            if (itemId === item.id) {
                return false;
            }
            
            return true;
        })

        setCartItems(newCartItems);
    };


    return (
        <div className="cart-container box-shadow">
            <h2> Your Order </h2>
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem 
                        key={item.id} 
                        item={item} 
                        handleAdd = {() => handleAdd(item.id)} 
                        handleReduce = {() => handleReduce(item.id)}
                        handleRemove = {() => handleRemove(item.id)}
                    />
                ))}
            </div>
            <div className="total"> Total: ${total} </div>
        </div>
    );
}

export default Cart;