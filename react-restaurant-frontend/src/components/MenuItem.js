import { api } from "../config";

function MenuItem({item}) {
    return (
        <div className="menu-item-container">
            <img src={`${api}${item.image}`} alt="" />
            <h3 className="menu-item-title"> {item.name} </h3>
            <h5 className="menu-item-price"> ${item.price} </h5>
        </div>
    );
}

export default MenuItem;