import Category from "@/components/Category";
import Breadcrumb from "@/components/Breadcrumb";
import { IoList } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useGlobalContext } from "@/contexts/GlobalContext";
import './style.css';
interface CategoriesArray {
    title: string,
    value: string,
}
const Categories = () => {
    const [categories, setCategroies] = useState<CategoriesArray[]>([]);
    const { selectedCategory, setSelectedCategory } = useGlobalContext();

    const handleCategoryClick = (value: string) => {
        setSelectedCategory(value);
    }
    useEffect(() => {
        const array = [
            { title: "All Categories", value: "all" },
            { title: "Fragrances", value: "fragrances" },
            { title: "Furniture", value: "furniture" },
            { title: "Groceries", value: "groceries" },
            { title: "Books", value: "books" },
            { title: "Beauty", value: "beauty" },
            { title: "Sports & Outdoors", value: "sports-outdoors" },
            { title: "Toys & Games", value: "toys-games" },
            { title: "Groceries", value: "groceries" },
            { title: "Health & Wellness", value: "health-wellness" },
            { title: "Baby Products", value: "baby-products" },
            { title: "Petshop", value: "pets" },
        ];
        
        setCategroies(array);
    }, [])
    return (
        <section className="Categories">
            <div>
                <Breadcrumb></Breadcrumb>
            </div>
            <div>
                <div className="SectionTitle">
                    <h2>
                        <IoList></IoList>
                        Categories
                    </h2>
                </div>
                <div className="CategoryWrapper">
                    {categories.length > 0 ? (
                        categories.map((item, index) => (
                            <Category
                                key={index}
                                title={item.title}
                                value={item.value}
                                selected={selectedCategory === item.value}
                                onClick={() => handleCategoryClick(item.value)}
                            />
                        ))
                    ) : (
                        <p>Loading categories...</p>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Categories;