import React, { useState, useEffect } from 'react';

const Chef = () => {
  const [menu, setMenu] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [orders, setOrders] = useState([]);

  // Fetch the menu from the backend
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  // Handle adding items to the order
  const handleAddToOrder = (itemId) => {
    setOrderItems([...orderItems, itemId]);
  };

  // Handle placing an order
  const handlePlaceOrder = () => {
    const orderData = { items: orderItems };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(`Order placed! Total: $${data.order.total_price}`);
        setOrders([...orders, data.order]);
        setOrderItems([]); // Clear order items
      });
  };

  return (
    <div>
      <h1>Chef's Restaurant Menu</h1>

      <h2>Menu</h2>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleAddToOrder(item.id)}>Add to Order</button>
          </li>
        ))}
      </ul>

      <h2>Current Order</h2>
      <ul>
        {orderItems.map((itemId, index) => {
          const item = menu.find((menuItem) => menuItem.id === itemId);
          return <li key={index}>{item.name}</li>;
        })}
      </ul>

      <button onClick={handlePlaceOrder}>Place Order</button>

      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order #{order.id} - Total: ${order.total_price} - Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chef;
