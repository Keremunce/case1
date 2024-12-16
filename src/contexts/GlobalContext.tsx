import React, { createContext, useState, useContext, ReactNode } from "react";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    category: string;
    thumbnail: string;
    quantity: number;
    onClick: () => void;
}
interface GlobalContextType {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedCategory: string;
    setSelectedCategory: (query: string) => void;
    basket: Product[];
    setBasket: (basket: Product[]) => void;
}

const defaultValue: GlobalContextType = {
    searchQuery: "",
    setSearchQuery: () => {}, 
    selectedCategory: "all",
    setSelectedCategory: () => {}, 
    basket: [],
    setBasket: () => {}, 
};

const GlobalContext = createContext<GlobalContextType>(defaultValue);

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return context;
};

// Provider: Global değerleri sarmalayan bileşen
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("all"); // Varsayılan değer 'all'
    const [basket, setBasket] = useState<Product[]>([]); 

    return (
        <GlobalContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                selectedCategory,
                setSelectedCategory,
                basket,
                setBasket,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
