import Header from "./Header";
import {Logo} from "./Images";
import HeaderActions from "./HeaderActions";
import {useNavigate} from "react-router-dom";

export default function HeaderWithActions() {
    const navigate = useNavigate();

    return <Header>
        <Logo className="header__logo" onClick={() => { navigate('/list') } }/>
        <HeaderActions/>
    </Header>
}