import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductDetail = () => {
    const [product, setProduct] = useState(null); // Initialize product as null
    const { id } = useParams(); // Get the product ID from the URL

    // Fetch product data by ID
    const getdata = async () => {
        try {
            let response = await axios.get(`http://localhost:8000/getbyid/${id}`); // Correct API endpoint with '/'
            if (response.status === 200) {
                console.log(response);
                setProduct(response.data.detail); // Set product data
                toast.success(response.data.message); // Show success message
            } else {
                console.log("Failed to fetch data");
                toast.error("Failed to fetch product data.");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.error("Error fetching product data.");
        }
    };

    useEffect(() => {
        getdata(); // Fetch data on component mount
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-semibold text-center my-8">Product Detail</h1>
            {product ? ( // Check if product data is available
                <div className="m-auto max-w-xl p-4 border rounded shadow">
                    {/* Display Product Image */}
                    {product.imageUrl && (
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-64 object-cover mb-4 rounded"
                        />
                    )}
                    {/* Display Product Name */}
                    <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                    {/* Display Product Description */}
                    <p className="text-lg mb-4">{product.description}</p>
                    {/* Display Product Price */}
                    <p className="text-lg font-semibold mb-4">Price: ${product.price}</p>
                    {/* Display any additional product details here */}
                </div>
            ) : (
                <p className="text-center text-lg">Loading product details...</p>
            )}
        </div>
    );
};

export default ProductDetail;
