import { createContext, useState, useContext, ReactNode } from "react";

export interface ProductProps {
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
    basket: ProductProps[];
    setBasket: (basket: ProductProps[]) => void;
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
    const [basket, setBasket] = useState<ProductProps[]>([]); 

    return (
        <GlobalContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                selectedCategory,
                setSelectedCategory,
                basket,
                setBasket
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
