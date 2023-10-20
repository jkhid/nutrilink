import React, { useState } from 'react';
import axios from 'axios';

function ProductSearch() {
    const [barcode, setBarcode] = useState('');
    const [product, setProduct] = useState(null);

    const fetchProductData = async () => {
        try {
            const response = await axios.get(`/api/product/${barcode}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={barcode}
                onChange={e => setBarcode(e.target.value)}
                placeholder="Enter barcode"
            />
            <button onClick={fetchProductData}>Search</button>

            {product && (
                <div>
                    <h1>{product.product.product_name}</h1>
                    <h1>{product.product.nutrition_grades}</h1>
                </div>
            )}
        </div>
    );
}

export default ProductSearch;
