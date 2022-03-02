import React, { useEffect } from 'react';
import { useGetProducts } from '@hooks/index';
import { Card } from '@components/index';

const API = 'https://api.escuelajs.co/api/v1/products?limit=20&offset=0';
// const API1 = 'https://nodejs-ecommerce-test.herokuapp.com/api/v1/products';

const ProductList = () => {
	const { products, isLoading } = useGetProducts(API);

	if (isLoading) return <h1>Loading...</h1>;

	return (
		<div className="cards-container">
			{products.map((product) => (
				<Card key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductList;
