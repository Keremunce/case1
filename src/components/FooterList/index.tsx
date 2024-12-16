import './style.css';
interface FooterListProps {
    title: string;
    listObjects: { text: string }[];
};
const FooterList: React.FC<FooterListProps> = ({ title, listObjects }) => {
    return (
        <div className="FooterList">
            <h3>{title}</h3>
            <ul>
                {listObjects.map((item, index) => (
                    <li key={index}><a href="#">{item.text}</a></li>
                ))}
            </ul>
        </div>
    );
};

export default FooterList;