import React from 'react';
import styles from './ProductCard.module.css';

export default function MyProductCard({ product }) {
    return (
        <div className={styles["product-card"]}>
            <img className={styles["product-image"]} src={product.image} alt={product.name} />
            <div className={styles["product-info"]}>
                <h3 className={styles["product-title"]}>{product.name}</h3>
                <p className={styles["product-description"]}>Category: {product.category}</p>
                <div className={styles["product-footer"]}>
                    <span className={styles["product-price"]}>${product.price}</span>
                    <button className={styles["product-button"]}>Ver más</button>
                </div>
            </div>
        </div>
    );
}