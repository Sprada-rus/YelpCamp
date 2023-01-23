export default function FindBlock() {
    return <>
        <div className="search container">
            <h1>Welcome to YelpCamp</h1>
            <p>View our hand-picked campgrounds from all over the world, or add your own.</p>
            <form id="search-block" className="search__form">
                <input type="text" name="value" id="value" placeholder="Search for camps"/>
                <button type="submit" className="primary-btn">Search</button>
            </form>
        </div>
    </>
}