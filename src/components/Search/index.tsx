import './search.css';
import { useGlobalContext } from "@/contexts/GlobalContext";
import { IoSearch } from "react-icons/io5";

const Search: React.FC = () => {
    const { searchQuery, setSearchQuery } = useGlobalContext();

    return (
        <div className="Search">
            <IoSearch></IoSearch>
            <input onInput={(e) => setSearchQuery(e.currentTarget.value)} type="search" placeholder='Search Products' />
            <button>Search</button>
        </div>
    );
};

export default Search;