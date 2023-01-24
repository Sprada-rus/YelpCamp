import { FaSearch } from "react-icons/fa";
import {useDispatch} from "react-redux";
import {setSearchList} from "../../../redux/campsReducer";

export default function FindBlock() {
    const dispatch = useDispatch()

    const searchHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        dispatch(setSearchList(formData.get('value')));
    }

    return <>
        <div className="search container">
            <h1>Welcome to YelpCamp</h1>
            <p>View our hand-picked campgrounds from all over the world, or add your own.</p>
            <form id="search-block" className="search__form" onSubmit={searchHandler}>
                <FaSearch className="search__icon"/>
                <input type="text" name="value" id="value" placeholder="Search for camps"/>
                <button type="submit" className="primary-btn">Search</button>
            </form>
        </div>
    </>
}