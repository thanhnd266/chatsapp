
const Search = () => {

    return (
        <div className="search-wrapper">
            <button className="search-btn">
                <span><i className="fa-solid fa-magnifying-glass"></i></span>
            </button>
            <input id="search-input" placeholder="Search..." type="text" />
        </div>
    )
}

export default Search;