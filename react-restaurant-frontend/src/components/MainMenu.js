import { useState, useEffect } from 'react';
import './MainMenu.css';
import axios from 'axios';
import {api} from '../config';
import MenuItem from './MenuItem';


function MainMenu() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            // fetch all Menu Items for the API
            // const result = await axios.get("http://localhost:4200/item/all");
            const result = await axios.get(`${api}/item/all`);
            // console.log(result);
            setItems(result.data);

        };

        fetchItems();
    }, []);

    return (
        <div className="main-menu-container">
            {items.map((item) => {
                return (
                    <MenuItem key={item.id} item={item} />
                )
            })}
        </div>
    );
}

export default MainMenu;