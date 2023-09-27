import { Component } from "react";
import './card-list.styles.css'
import Card from "../card/card.component";

class CardList extends Component<any>{


    render(){
        const {monsters}: any = this.props;
        console.log(this.props)
        return(<>
        <div className="card-list">
        {monsters.map((monster: any, index: number) => 
         {
            
            return (<>
            <Card monster ={monster} index ={index}/>
            </>)
    })}
        </div>
        </>) 
    }
}
export default CardList