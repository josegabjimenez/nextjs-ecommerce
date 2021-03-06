import { useState, useEffect } from 'react';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(API);
      const data = await res.json();
      setProducts([...products, ...data]);
      setIsLoading(false);
    } catch (err) {
      console.error('Error', err);
    }
  };

  useEffect(() => {
    getData();
  }, [API]);

  return { products, isLoading };
};

export default useGetProducts;
