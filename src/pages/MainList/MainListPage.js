import HeaderWithActions from "../../components/HeaderWithActions";
import FindBlock from "./components/FindBlock";
import Footer from "../../components/Footer";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {init} from "../../redux/campsReducer";
import campsData from "../../data/camps.json";
import CampsList from "../../components/CampsList";

export default function MainListPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(init(campsData));
        // eslint-disable-next-line
    }, []);

    return <>
        <HeaderWithActions />
        <div className="container">
            <FindBlock />
        </div>
        <CampsList />
        <Footer />
    </>
}