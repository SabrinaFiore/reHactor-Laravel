import './Sign.css';
import SingUp from "../../UI/SingUp/SingUp.1";

export default function Sign() {
    return (
        <>
            <div className="container-fluid min-vh-100 bg">
                <div className="cointainer">
                    <div className="row justify-content-center align-items-center min-vh-100">
                        <div className="col-12 col-md-8 col-lg-6">
                            <SingUp/>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
}