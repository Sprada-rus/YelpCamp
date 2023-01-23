import Header from "./Header";
import {Logo} from "./Images";
import HeaderActions from "./HeaderActions";

export default function HeaderWithActions() {
    return <Header>
        <Logo />
        <HeaderActions/>
    </Header>
}