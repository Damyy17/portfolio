import "../assets/styles/home.sass"
import TechSlider from "../components/tech-slider";
import myPhoto from "../assets/images/myphoto.jpg";

export default function Home(){

    return(
        <div className="home-container">
            <div className="hero-section">
                <div className="photo-container">
                    <img src={myPhoto} alt="" />
                </div>
                <div className="headers">
                    <div className="greeting-header">Hi, I'm <span>Damien</span></div>
                    <div className="abilities-header">Web Developer, UI/UX <br/>
                        Designer, Graphic Designer </div>
                </div>
                <TechSlider />
            </div>

            <div className="scroll-text">
                <span>Scroll to discover</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    );
}