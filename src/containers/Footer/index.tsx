import DownloadApp from "@/components/DownloadApp";
import FooterList from "@/components/FooterList";
import BrandLogo from "@/components/BrandLogo";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";

import './style.css';
export default function Footer() {
    const currentYear = new Date().getFullYear();
    const usefulLinks = [
        { text: 'Home' },
        { text: 'Services' },
        { text: 'FAQs' },
        { text: 'Blog' },
        { text: 'Careers' },
    ];

    const institutional = [
        { text: 'About Us' },
        { text: 'Our Mission' },
        { text: 'Leadership' },
        { text: 'Partnerships' },
        { text: 'Annual Reports' },
    ];

    const contacts = [
        { text: 'Contact Us' },
        { text: 'Support Center' },
        { text: 'Feedback' },
        { text: 'Locations' },
        { text: 'Live Chat' },
    ];

    const privacyPolicies = [
        { text: 'Privacy Policy' },
        { text: 'Terms and Conditions' },
        { text: 'Cookie Policy' },
        { text: 'Data Protection' },
        { text: 'Legal Notices' },
    ];

    return (
        <footer className="Footer">
            <div className="DownloadAppWrapper">
                <DownloadApp></DownloadApp>
            </div>
            <div className="FooterContent">
                <div>
                    <BrandLogo></BrandLogo>
                    <div className="Socials">
                        <div className="Socials">
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <IoLogoFacebook />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <IoLogoInstagram />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <IoLogoTwitter />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <IoLogoYoutube />
                            </a>
                        </div>

                    </div>
                    <div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias vero perspiciatis saepe tenetur in! Quos obcaecati sunt autem! Suscipit facere quam quas alias quos debitis sed dolorum ullam similique harum.</p>
                    </div>
                </div>
                <div className="List">
                    <FooterList title="Useful Links" listObjects={usefulLinks}></FooterList>
                    <FooterList title="Institutional" listObjects={institutional}></FooterList>
                    <FooterList title="Contact" listObjects={contacts}></FooterList>
                    <FooterList title="Privacy Policy" listObjects={privacyPolicies}></FooterList>
                </div>
            </div>
            <div className="BottomContent">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente unde maiores optio officia provident, voluptatibus tenetur veritatis. Distinctio nisi, eligendi in ad obcaecati, aspernatur corporis id velit sint necessitatibus aliquid?</p>
            </div>
            <div className="Bottom">
                <p>Copyright © {currentYear} Brand</p>
            </div>
        </footer>
    )
}
