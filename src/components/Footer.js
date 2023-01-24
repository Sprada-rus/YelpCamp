import {Logo} from "./Images";
import {useNavigate} from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();

    return <footer>
        <div className="container">
            <Logo className="footer__logo" onClick={() => navigate('/list')}/>
        </div>
    </footer>
}