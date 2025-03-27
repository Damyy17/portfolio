import { Outlet } from "react-router";
import "./assets/styles/layout.sass"
import Navbar from "./components/navbar";

export default function Layout() {

    return(
        <> 
            <div className="gradient-bg">
                <div className="blobs-container">
                    <img src="./src/assets/images/blob-combo.png" className="blob1"  />
                    <img src="./src/assets/images/blob-combo.png" className="blob2"  />
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