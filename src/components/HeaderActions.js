import hamburgerMenu from "../image/Assets/Hamburger Menu.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderActions() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return <>
        <button className="hamburger" onClick={() => setOpen(prevState => !prevState)}><img src={hamburgerMenu} alt=""/></button>
        <div className={"header__actions" + (open ? ' open' : '')}>
            <button className="primary-btn" onClick={() => navigate('/login')} disabled={window.location.pathname.includes('/login')}>Log in</button>
            <button className="primary-btn" onClick={() => navigate('/sign-up')} disabled={window.location.pathname.includes('/registration')}>Create an account</button>
        </div>
    </>
}