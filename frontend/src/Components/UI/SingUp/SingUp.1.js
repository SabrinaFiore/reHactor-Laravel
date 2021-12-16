import './SingUp.css';

export default function SingUp() {
    return (
        <>
            <form className="form">
                <div className="top"></div>
                <div className="bottom"></div>
                <div className="mb-5">
                    <label className="form-label" htmlFor="userMail">Inserisci la tua email</label>
                    <input type="email" className="form-control bg-transparent border-0 border-bottom border-info rounded-0" id="userMail"/>
                </div>
                <div className="mb-5">
                    <label className="form-label" htmlFor="userPassword">Inserisci la tua password</label>
                    <input type="password" className="form-control bg-transparent border-0 border-bottom border-info rounded-0" id="userPassword"/>
                </div>
                <div className="mb-5">
                    <button type="submit" className="btn btn-outline-info px-5 rounded-0">Login</button>
                </div>
            </form>
        </>)
    ;
}
