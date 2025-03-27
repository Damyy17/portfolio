import { NavLink } from "react-router";
import "../assets/styles/navbar.sass"
import gotoIcon from '../assets/icons/go-tosvg.svg'

export default function Navbar() {

    return (
        <nav>
        <div className="nav"> 
            <div className="logo-title">Code by Damien</div>
            <div className="routes">
                <NavLink to ="/" end> Home</NavLink>
                <NavLink to ="/myprojects" end> MyProjects</NavLink>
                <NavLink to ="/resume" end> Resume</NavLink>
                <NavLink to ="/linkedin" end> LinkedIn</NavLink>
            </div>
            <div className="get-in-touch">
                <div>Get In Touch</div>
                {/* <div>svg</div> */}
                <img src={gotoIcon} className="goto" alt="" />
            </div>
        </div>
    </nav>
    );
}