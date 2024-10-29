import { useEffect, useState } from "react";
import "./Items.css";
import axios from "axios";
import { api } from "../config";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons";
  

function Items() {
    const [items, setItems] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get(`${api}/item/all`);
            setItems(result.data);
        };

        fetchItems();

        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="items-container">
            <h2 className="subtitle"> Menu Items </h2>
            <Link to="/admin/item-form">
                <Button colorScheme="teal" variant="outline" leftIcon={<AddIcon w={4} h={4} />}> 
                    Add Item 
                </Button>
            </Link>

            {isMobile ? (
                <div className="items-cards">
                    {items.map((item) => (
                        <div key={item.id} className="item-card">
                            <h3>{item.name}</h3>
                            <div className="item-info">
                                <span className="item-label">Price:</span> ${item.price}
                            </div>
                            <div className="item-info">
                                <span className="item-label">Image:</span>
                                <img src={`${api}${item.image}`} alt={item.name} />
                            </div>
                            <div className="actions">
                                <Link to={`/admin/item-form/${item.id}`}>
                                    <Button colorScheme="yellow" variant="outline">Edit</Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <TableContainer>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th isNumeric>Price</Th>
                                <Th>Image</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {items.map((item) => (
                                <Tr key={item.id}>
                                    <Td>{item.name}</Td>
                                    <Td isNumeric>${item.price}</Td>
                                    <Td>
                                        <img src={`${api}${item.image}`} alt={item.name} />
                                    </Td>
                                    <Td>
                                        <Link to={`/admin/item-form/${item.id}`}>
                                            <Button colorScheme="yellow" variant="outline">Edit</Button>
                                        </Link>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
}

export default Items;