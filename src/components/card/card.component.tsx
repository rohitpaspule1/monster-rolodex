import { Component } from "react";
import './card.styles.css'

class Card extends Component<any>{
    
    render() {
        const {name ,email, id} = this.props.monster;
        const index =  this.props.index
return (<>
<div className="card-container" key={id}>
            <img src={`https://robohash.org/${index}}?set=set2&size=180x180`} 
                alt={`monster ${name}`} />
             <h2 key={id}>{name}</h2>
             <p>{email}</p>
            </div>
</>)
    }
}
export default Card