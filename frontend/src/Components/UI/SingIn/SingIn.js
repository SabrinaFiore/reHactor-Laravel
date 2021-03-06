import useInput from "../../../Hooks/useInput";

import { AuthContext } from "../../../Contexts/Auth";
import { ConfigContext } from "../../../Contexts/Config";
import { useContext } from "react";

export default function SingIn() {

    const username = useInput("");
    const email = useInput("");
    const password = useInput("");
    const passwordConfirm = useInput("");

    let {api_urls} = useContext(ConfigContext);
    let {login} = useContext(AuthContext);

    const singIn = (event) => {
        event.preventDefault();

        if (password.value === passwordConfirm.value) {
            // proseguire
            // fetch => register
            // fetch => login
            // fetch => view-profile

            fetch(`${api_urls.backend}/api/users/register`, {
                method: "POST",
                header: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: username.value,
                    email: email.value,
                    password: password.value,
                    password_confirmation: passwordConfirm.value
                })
                .then(response => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            alert("Ops...")
                        }  
                    }
                ) 
            })
        } else {
            alert("Le password non coincidono")
        }
    }

    return (
        <>
            <form className="sign-form" >
                <div className="sign-top"></div>
                <div className="sign-bottom"></div>
                <div className="mb-5">
                    <label className="form-label" htmlFor="userName">Inserisci il tuo user</label>
                    <input 
                        type="text" 
                        className="form-control bg-transparent border-0 border-bottom border-info rounded-0" 
                        id="userName"
                        {...username}
                    />
                </div>
                <div className="mb-5">
                    <label className="form-label" htmlFor="userMail">Inserisci la tua mail</label>
                    <input 
                        type="email" 
                        className="form-control bg-transparent border-0 border-bottom border-info rounded-0" 
                        id="userMail"
                        {...email}
                    />
                </div>
                <div className="mb-5">
                    <label className="form-label" htmlFor="userPassword">Inserisci la tua password</label>
                    <input 
                        type="password" 
                        className="form-control bg-transparent border-0 border-bottom border-info rounded-0" 
                        id="userPassword"
                        {...password}
                    />
                </div>
                <div className="mb-5">
                    <label className="form-label" htmlFor="userPasswordConfirm">Conferma password</label>
                    <input 
                        type="password" 
                        className="form-control bg-transparent border-0 border-bottom border-info rounded-0" 
                        id="userPasswordConfirm"
                        {...passwordConfirm}
                    />
                </div>
                <div className="mb-5">
                    <button 
                        type="submit" 
                        className="btn btn-outline-info px-5 rounded-0"
                    >Register now</button>
                </div>
            </form>
        </>)
    ;
}
