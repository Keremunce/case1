import { ReactNode } from "react";
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";

interface MainLayoutProps{
    children: ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="LayoutContainer">
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout;