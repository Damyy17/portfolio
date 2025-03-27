import React, {useState, useEffect, useRef} from "react";
import "../assets/styles/tech-slider.sass"
import JavaScriptIcon from "../assets/icons/Javascript.svg";
import PythonIcon from "../assets/icons/Python.svg";
import JavaIcon from "../assets/icons/Java.svg";
import NodeJSIcon from "../assets/icons/NodeJS.svg";
import ReactIcon from "../assets/icons/React.svg";
import DockerIcon from "../assets/icons/Docker.svg";
import MongoDBIcon from "../assets/icons/MongoDB.svg";
import PostgreSQLIcon from "../assets/icons/PostgresSQL.svg";
import TypeScriptIcon from "../assets/icons/TypeScript.svg";
import FigmaIcon from "../assets/icons/Figma.svg";

const techStackData = [
  { id: 1, name: "JavaScript", logo: JavaScriptIcon },
  { id: 2, name: "Python", logo: PythonIcon },
  { id: 3, name: "Java", logo: JavaIcon },
  { id: 4, name: "Node.js", logo: NodeJSIcon },
  { id: 5, name: "React", logo: ReactIcon },
  { id: 6, name: "Docker", logo: DockerIcon },
  { id: 7, name: "MongoDB", logo: MongoDBIcon },
  { id: 8, name: "PostgreSQL", logo: PostgreSQLIcon },
  { id: 9, name: "TypeScript", logo: TypeScriptIcon },
  { id: 10, name: "Figma", logo: FigmaIcon },
];

export default function TechSlider(){

    const [animationSpeed, setAnimationSpeed] = useState(20);
    const sliderRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollSpeed = window.scrollY / 100;
            const newSpeed = Math.max(5, 20 - scrollSpeed);
            setAnimationSpeed(newSpeed);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const duplicatedTechStack = [...techStackData, ...techStackData];

    return (
        <div className="tech-slider">
            <div   
                className="slider-track" 
                ref={sliderRef} 
                style={{animationDuration: `${animationSpeed}`}}
            >
                {duplicatedTechStack.map((tech, index) => (
                    <div key={`${tech.id}-${index}`} className="tech-item">
                        <img src={tech.logo} alt="" />
                        <span className="tech-name">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
