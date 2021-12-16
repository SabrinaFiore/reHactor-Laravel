import './Sign.css';
import { useState } from "react";
import SingUp from '../../UI/SingUp/SingUp';
import SingIn from "../../UI/SingIn/SingIn";

export default function Sign() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
            <div className="container-fluid min-vh-100 bg">
                <div className="cointainer">
                    <div className="row justify-content-center align-items-center min-vh-100">
                        <div className="col-12 col-md-8 col-lg-6 text-center">
                            { isLogin ? <SingUp/> : <SingIn/>}
                            <button className='mt-5 btn btn-outline-info rounded-0' onClick={() => setIsLogin(!isLogin)}>
                                { isLogin ? "Not a user? Register now" : "Already user? Login" }
                            </button>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
}