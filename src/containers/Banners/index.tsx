import './style.css';
import Banner from "@/components/Banner";
import { useEffect, useState } from 'react';
interface BannerProps {
    title: string;
    image: string;
    button: string;
    color: string;
}
import { IoFlameSharp } from 'react-icons/io5';
const Banners = () => {
    const [banners, setBanners] = useState<BannerProps[]>([]);
    useEffect(() => {
        const array = [
            { title: "Delivery Fee is on Us for Orders Over 75 TL", button: "Learn More", color: "#feeae8", image: "https://hasaneksi.net/wp-content/uploads/2022/01/moto-kurye-min.png" },
            { title: "15% Discount on Cart for Gift Category", button: "Special Gifts", color: "#e8f1ff", image: "https://hasaneksi.net/wp-content/uploads/2022/01/hediye-urunler-min.png", },
            { title: "15% Discount in Cart for Stationery Category", button: "Buy Now", color: "#e2f8e1", image: "https://hasaneksi.net/wp-content/uploads/2022/01/kirtasiye-urunleri-min.png", },
        ];
        setBanners(array);
    }, [])
    return (
        <section className="Banners">
            <div>
                <h3><IoFlameSharp /> Banners</h3>
            </div>
            <div className="BannersWrapper">
                {banners.length > 0 ? (
                    banners.map((item, index) => (
                        <Banner key={index}
                            title={item.title}
                            image={item.image}
                            button={item.button}
                            color={item.color}
                        ></Banner>
                    ))
                ) : (
                    <p>Loading Banners...</p>
                )}
            </div>
        </section>
    );
};

export default Banners;