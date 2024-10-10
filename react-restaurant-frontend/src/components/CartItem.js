import { IconButton } from "@chakra-ui/react";
import { AddIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons";
import { api } from "../config";

function CartItem({ item, handleAdd, handleReduce, handleRemove }) {
    return (
        <div className="cart-item-container">
            <img src={`${api}${item.image}`} alt="" className="box-shadow"/>
            <div className="cart-item-details">
                <h3 className="cart-item-title">{item.name}</h3>
                <h5 className="cart-item-price">
                    ${item.price} x {item.qty}
                </h5>
                <div className="add-delete-btns">
                    <IconButton
                        size="sm"
                        colorScheme="teal"
                        icon={<AddIcon w={4} h={4} />}
                        onClick={handleAdd}
                    />
                    <IconButton
                        size="sm"
                        colorScheme="yellow"
                        icon={<CloseIcon w={4} h={4} />}
                        onClick={handleReduce}
                    />
                </div>
            </div>
            <IconButton
                colorScheme="red"
                icon={<DeleteIcon />}
                onClick={handleRemove}
            />
        </div>
    );
}

export default CartItem;