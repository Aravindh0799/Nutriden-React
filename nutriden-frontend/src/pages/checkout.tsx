"use client"

import { useEffect, useState } from 'react'
import styles from "../styles/checkout.module.css"
import image from "../assets/react.svg"

interface CartItem {
    id: string;
    name: string;
    image: string;
    quantity: number;
    price: number,
    error: string;
}


const Checkout = () => {

    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [gst, setGst] = useState(0)
    const [finalValue, setFinalValue] = useState(0)

    useEffect(() => {
        setCartItems([
            {
                id: "1",
                name: "Nutriden Nut Powder",
                image,
                quantity: 0,
                price: 500,
                error: "",
            },
            {
                id: "2",
                name: "Nutriden Energy Powder",
                image,
                quantity: 0,
                price: 250,
                error: "",
            },
        ]);
    }, []);

    const increaseQuantity = (id: string) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1, error: "" }
                    : item
            )
        );
    };

    const total = cartItems.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
    );


    const decreaseQuantity = (id: string) => {
        setCartItems(prev =>
            prev.map(item => {
                if (item.id !== id) return item;

                if (item.quantity <= 0) {
                    return { ...item, error: "Quantity should not be negative" };
                }

                return {
                    ...item,
                    quantity: item.quantity - 1,
                    error: "",
                };
            })
        );
    };


    useEffect(() => {
        setFinalValue(
            total + (total * 0.18)
        )
        setGst(
            total * 0.18
        )
        const timers = cartItems.map(item => {
            if (item.error) {
                return setTimeout(() => {
                    setCartItems(prev =>
                        prev.map(p =>
                            p.id === item.id ? { ...p, error: "" } : p
                        )
                    );
                }, 3000);
            }
            return null;
        });

        return () => {
            timers.forEach(t => t && clearTimeout(t));
        };
    }, [cartItems]);

    const handlePayment = () => {
        alert("hi")
    }


    return (
        <div className={styles.checkoutContainer}>
            <div className={styles.cartContainer}>
                <div className={`${styles.cartCard} glassCard`}>
                    <h1>Your Cart</h1>
                    <hr />
                    <br />
                    {cartItems.map(item => (
                        <div className={styles.cartContent} key={item.id}>
                            <img src={item.image} alt={item.name} />

                            <div>
                                <p>{item.name}</p>

                                <div className={styles.quantityContainer}>
                                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                    <p>{item.quantity}</p>
                                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                                </div>

                                {item.error && (
                                    <p className={styles.error}>{item.error}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.paymentDetailsContainer}>
                <div className={`${styles.paymentCard} glassCard`}>
                    <div>
                        <h1>Payment</h1>
                        <hr />
                    </div>
                    <div className={styles.priceDiv}>
                        <p>Product price</p>
                        <p>: {total}</p>
                    </div>
                    <div className={styles.priceDiv}>
                        <p>GST</p>
                        <p>: {gst}</p>
                    </div>
                    <hr />
                    <div className={styles.priceDiv}>
                        <p>Total to be paid</p>
                        <p>: {finalValue}</p>
                    </div>
                    <button onClick={handlePayment} disabled={total === 0 ? true : false}>
                        Pay Now
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Checkout