import './style.css';

interface CategoryProps {
    title: string;
    value: string;
    selected: boolean;
    onClick?: () => void;
}
const Category: React.FC<CategoryProps> = ({title, value, onClick, selected}) => {
    return (
        <button className={`Category ${selected ? 'active' : ''}`} onClick={onClick || (() => console.log(`${title} clicked`))} value={value}>
            {title}
        </button>
    );
};

export default Category;