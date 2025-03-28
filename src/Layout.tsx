import { Outlet } from "react-router";
import "./assets/styles/layout.sass"
import Navbar from "./components/navbar";

export default function Layout() {

    return(
        <> 
            <svg style={{ position: "absolute", width: 0, height: 0 }}>
                <defs>
                    <filter id="grain" x="0" y="0" width="100%" height="100%">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.7"
                            numOctaves="3"
                            stitchTiles="stitch"
                            result="noise"
                        />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0
                                    0 0 0 0 0
                                    0 0 0 0 0
                                    0 0 0 0.1 0"
                            in="noise"
                            result="grain"
                        />
                        <feComposite in="SourceGraphic" in2="grain" operator="in" />
                    </filter>
                </defs>
            </svg>

            <div className="gradient-bg">
                <div className="blobs-container">
                    <img src="./src/assets/images/blob-combo.png" className="blob1"  />
                    <img src="./src/assets/images/blob-combo2.png" className="blob2"  />
                    <div className="glass-overlay"></div>
                </div>
            </div>
            <div className="content-container">
                <Navbar />
                <Outlet /> {/* Your routed content will appear here */}
            </div>  
        </>
    );
}