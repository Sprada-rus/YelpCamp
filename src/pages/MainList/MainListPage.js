import HeaderWithActions from "../../components/HeaderWithActions";
import FindBlock from "./components/FindBlock";

export default function MainListPage() {
    return <>
        <HeaderWithActions />
        <section className="container">
            <FindBlock />
        </section>

    </>
}