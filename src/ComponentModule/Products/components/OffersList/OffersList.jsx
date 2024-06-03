import React, { useEffect, useState } from 'react';
import MyProductCard from '../../../Common/Components/ProductCard/ProductCard';
import styles from './OffersList.module.css';
import products from '../../../../../public/products-store.json';

const OffersList = () => {
    const offersLength = 3;
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        const getRandomProducts = () => {
            const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
            return shuffledProducts.slice(0, offersLength);
        };
        
        setSelectedProducts(getRandomProducts());
    }, []);

    return (
        <div className={styles.offersContainer}>
            {selectedProducts.map((product) => (
                <div key={product.id} className={styles.productCard}>
                    <MyProductCard product={product} />
                </div>
            ))}
        </div>
    );
};

export default OffersList;