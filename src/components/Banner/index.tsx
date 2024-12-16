import "./style.css";
interface Banner {
    title: string;
    image: string;
    button: string;
    color: string;
}
const Banner: React.FC<Banner> = ({title, image, button, color}) => {
    return (
        <div className="Banner" style={{backgroundColor: color}}>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <div>{title}</div>
                <div>
                    <button>{button}</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;