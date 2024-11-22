import { MdOutlineTravelExplore } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-20 ">
            <footer className="footer footer-center rounded-t-2xl p-10 bg-purple-400 text-primary-content">
            <aside>
                <p className="font-extrabold text-[30px] text-green-500"><MdOutlineTravelExplore /></p>
                <p className="font-bold">
                TouristTrekker Ltd. <br/>Providing best tourist spot since 2000
                </p> 
                <p>Copyright © <span className="font-extrabold">TouristTrekker</span> All right reserved</p>
                <p><span className="font-extrabold">contact: </span>01724837494</p>
            </aside> 
            <nav>
                <div className="grid grid-flow-col gap-4 text-[30px]">
                <NavLink to='https://www.facebook.com/zarin.shazi.3'><a><p><FaFacebook /></p></a></NavLink>
                <NavLink to='https://www.instagram.com/'><a><p><FaInstagram /></p></a></NavLink>
                <NavLink to='https://www.linkedin.com/feed/'><a><p><FaLinkedin /></p></a></NavLink>
                <NavLink to='https://twitter.com/i/flow/login'><a><p><FaTwitter /></p></a></NavLink>
                </div>
            </nav>
            </footer>
        </div>
    );
};

export default Footer;