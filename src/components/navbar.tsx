import { NavLink } from "react-router";
import "../assets/styles/navbar.sass"

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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 7H17V17" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </div>
        </div>
    </nav>
    );
}