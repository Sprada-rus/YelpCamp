import hamburgerMenu from "../image/Assets/Hamburger Menu.svg";
import { useState } from "react";

export default function HeaderActions() {
    const [open, setOpen] = useState(false);

    return <>
        <button className="hamburger" onClick={() => setOpen(prevState => !prevState)}><img src={hamburgerMenu} alt=""/></button>
        <div className={"header__actions" + (open ? ' open' : '')}>
            <button className="primary-btn">Log in</button>
            <button className="primary-btn">Create an account</button>
        </div>
    </>
}