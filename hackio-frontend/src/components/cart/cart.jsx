import React, { useState } from 'react';
import './cart.css';
export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    // Función para agregar un artículo al carrito
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    return (
        <div className="cart-section">
            <h2>Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>{item.name} - ${item.price}</li>
                ))}
            </ul>
            <button onClick={() => setCartItems([])}>Clear Cart</button>

            {/* Ejemplo de cómo agregar un artículo al carrito */}
            <button onClick={() => addToCart({ name: "Item 1", price: 10 })}>Add Item 1</button>
            <button onClick={() => addToCart({ name: "Item 2", price: 20 })}>Add Item 2</button>
        </div>
    );
}
