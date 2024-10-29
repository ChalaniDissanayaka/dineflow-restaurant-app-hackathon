import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../config";
import "./Orders.css";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button, Badge } from "@chakra-ui/react";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const fetchOrders = async () => {
    const result = await axios.get(`${api}/item/orders`);
    setOrders(result.data);
  };

  useEffect(() => {
    fetchOrders();
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleComplete = async (orderId) => {
    await axios.post(`${api}/item/order-complete/${orderId}`, {});
    fetchOrders();
  };

  return (
    <div className="orders-container">
      <h2 className="subtitle">Orders</h2>

      {isMobile ? (
        <div className="orders-cards">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-code">Order Code: {order.code}</div>
              <div className="order-items">
                {order.items.map((item) => (
                  <div key={item.name}>
                    {item.name} ({item.qty})
                  </div>
                ))}
              </div>
              <div className="order-total">Total: ${order.total}</div>
              <div className="order-actions">
                {order.complete ? (
                  <Badge colorScheme="red">Completed</Badge>
                ) : (
                  <Button
                    colorScheme="teal"
                    onClick={() => handleComplete(order.id)}
                  >
                    Complete
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Order Code</Th>
                <Th>Items</Th>
                <Th isNumeric>Total</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {orders.map((order) => (
                <Tr key={order.id}>
                  <Td>{order.code}</Td>
                  <Td>
                    {order.items.map((item) => (
                      <div key={item.name}>
                        {item.name} ({item.qty})
                      </div>
                    ))}
                  </Td>
                  <Td isNumeric>${order.total}</Td>
                  <Td>
                    {order.complete ? (
                      <Badge colorScheme="red">Completed</Badge>
                    ) : (
                      <Button
                        colorScheme="teal"
                        onClick={() => handleComplete(order.id)}
                      >
                        Complete
                      </Button>
                    )}
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

export default Orders;