import "./Header.css";
// import classes from "./Header.module.css";


export default function Header() { 
    return (
        <header>
            {/* <div className={classes.overlay}></div> */}
            <div className="overlay"></div>

            <video playsInline="playsinline" autoPlay="autoplay" muted loop>
            <source 
                src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" 
                type="video/mp4"/>
            </video>

            {/* <div className={classes.container + "h-100"}> */}
            <div className="container h-100">
                <div className="d-flex h-100 text-center align-items-center">
                <div className="w-100 text-white">
                    <h1 className="display-3">Video Header</h1>
                    <p className="lead mb-0">Using HTML5 Video and Bootstrap</p>
                </div>
                </div>
            </div>
        </header>
    );
}