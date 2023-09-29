import './search-box.styles.css'

const SearchBox = ({ onChangeHandler, placeholder, className }: any) => {

    return (<>
        <input
            type="search"
            className={`search-box ${className}`}
            placeholder={placeholder}
            onChange={onChangeHandler} />
    </>)
}

export default SearchBox