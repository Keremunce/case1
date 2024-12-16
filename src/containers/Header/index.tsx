import './Header.css';
import BasketButton from '@/components/BasketButton';
import Search from '@/components/Search';
import BrandLogo from '@/components/BrandLogo';

const Header = () => {
    return (
        <header className="Header">
            <div>
                <BrandLogo></BrandLogo>
                <Search></Search>
                <BasketButton></BasketButton>
            </div>
            <div>
                <h1>Loryen H1</h1>
            </div>
        </header>
    );
};

export default Header;