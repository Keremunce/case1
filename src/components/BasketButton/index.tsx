import './styles.css';
import { IoBasket, IoFlash } from "react-icons/io5";
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useEffect, useState } from 'react';

const BasketButton = () => {
    const { basket } = useGlobalContext();
    const [lengthProducts, setLengthProducts] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const freeShippingTarget = 100; // Ücretsiz kargo hedefi

    useEffect(() => {
        setLengthProducts(basket.length);
        const calculatedPrice = basket.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(calculatedPrice);
    }, [basket]);

    // İlerleme yüzdesi hesaplama
    const progressPercentage = Math.min((totalPrice / freeShippingTarget) * 100, 100);

    return (
        <div className='ParentBasketButton'>
            <div className="BasketButton">
                <button>
                    <IoBasket />
                    Basket
                </button>
                <span className='BasketCount'>{lengthProducts}</span>
            </div>
            <div className="FreeDelivery">
                <div className='Content'>
                    <IoFlash /> 
                    Add a product worth ${Math.max(freeShippingTarget - totalPrice, 0).toFixed(2)} more to get free shipping.
                </div>
                <div className="ProgressBar">
                    <span 
                        className='track' 
                        style={{ width: `${progressPercentage}%` }}
                    ></span>
                </div>
            </div>
        </div>
    );
};

export default BasketButton;
