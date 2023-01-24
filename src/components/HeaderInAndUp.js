import {useNavigate} from "react-router-dom";
import Header from "./Header";
import {Logo} from "./Images";

export default function HeaderInAndUp() {
    const navigate = useNavigate();

    return <Header>
        <Logo className="header__logo" onClick={() => { navigate('/list') } }/>
        <div onClick={() => navigate('/list')} className="header__back-action">&#129040; Back to campgrounds</div>
    </Header>
}