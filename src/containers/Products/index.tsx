import Product from "@/components/Product";
import { IoFlameSharp } from "react-icons/io5";
import './style.css';
import { ProductProps, useGlobalContext } from "@/contexts/GlobalContext";
import { useState, useEffect } from "react";

const Products = () => {
    const { selectedCategory } = useGlobalContext();
    const { searchQuery } = useGlobalContext();
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);
    const { basket, setBasket } = useGlobalContext();
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
                setFilteredProducts(data.products);
            });
    }, []);

    useEffect(() => {
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchQuery, products]);

    useEffect(() => {
        if (selectedCategory === 'all') {
            setFilteredProducts(products);
        } else {
            const filteredbyCategories = products.filter((product) =>
                product.category.toLowerCase() === selectedCategory
            )
            setFilteredProducts(filteredbyCategories);
        }

    }, [selectedCategory]);
    const handleAddBasket = (product: ProductProps) => {
        const isProductInBasket = basket.some(item => item.id === product.id);
        
        if (isProductInBasket) {
            setBasket(basket.map(item => 
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setBasket([...basket, { ...product, quantity: 1 }]);
        }
    };

    return (
        <section className="Products">
            <div>
                <h2><IoFlameSharp /> Products</h2>
            </div>
            <div className="ProductsWrapper">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((item, index) => (
                        <Product
                            key={index}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            category={item.category}
                            thumbnail={item.thumbnail}
                            description={item.description}
                            onClick={() => handleAddBasket(item)}
                        />
                    ))
                ) : (
                    <p>Loading products...</p>
                )}
            </div>
        </section>
    );
};

export default Products;