import { IoAddCircleOutline, IoStar } from "react-icons/io5";
import './style.css';
import { useGlobalContext } from "@/contexts/GlobalContext";
import { useState } from "react";

interface ProductProps {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    category: string;
    thumbnail: string;
    onClick: () => void;
}
const Product: React.FC<ProductProps> = ({ id, title, description, price, rating, category, thumbnail, onClick }) => {
    const { basket, setBasket } = useGlobalContext();
    const [quantity, setQuantity] = useState<number>(1);
    const isInBasket = basket.some((item) => item.id === id);
    const currentProduct = basket.filter((item) => item.id === id)[0];
    const totalStars = 5;
    const filledStars = Math.round(rating);
    const unfilledStars = totalStars - filledStars;

    const increaseQuantity = (product: ProductProps) => {
        setQuantity(quantity + 1);
        setBasket(
            basket.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };
    const decreaseQuantity = (product: ProductProps) => {
        setQuantity(quantity - 1);
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setBasket(basket.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ));
        } else {
            setBasket(basket.filter(item => item.id !== product.id));
        }
    }
    return (
        <div className="Product" data-category={category} data-id={id}>
            <div className="Image">
                <img src={thumbnail} alt="" />
            </div>
            <div className="Content">
                <div className="Title">{title}</div>
                <div className="Description">{description}</div>
                <div className="Rating"> <span className="rate">{rating}</span> <span> </span>
                    {Array(filledStars)
                        .fill(0)
                        .map((_, index) => (
                            <IoStar key={`filled-${index}`} className="text-yellow-500" />
                        ))}
                    {Array(unfilledStars)
                        .fill(0)
                        .map((_, index) => (
                            <IoStar key={`unfilled-${index}`} className="text-gray-300" />
                        ))}
                </div>
                <div className="Price">${price}</div>
            </div>
            <div className="AddBasket">
                {basket && isInBasket ? (
                    <div className="InBasket">
                        <button onClick={() => decreaseQuantity(currentProduct)} className="minusBtn">-</button>
                        <span>{quantity}</span>
                        <button onClick={() => increaseQuantity(currentProduct)} className="plusBtn">+</button>
                    </div>
                ) : (
                    <button onClick={onClick}><IoAddCircleOutline /> Add to Cart</button>
                )
                }
            </div>
        </div >
    );
};

export default Product;