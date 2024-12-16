import "./style.css";
const Breadcrumb = () => {
    return (
        <nav className="Breadcrumb">
            <a href="#">Loryen</a>
            <a href="#">Istanbul</a>
            <a href="#" className="current">Loryen BreadCrumb</a>
        </nav>
    );
};

export default Breadcrumb;