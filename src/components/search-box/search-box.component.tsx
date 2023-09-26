import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component<any>{
    render(){
        const {onChangeHandler,placeholder,className} = this.props;
        return(<>
        <input 
        type="search"
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={onChangeHandler} />
        </>)
    }
}
export default SearchBox