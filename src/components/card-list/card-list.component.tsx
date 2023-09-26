import { Component } from "react";

class CardList extends Component<any>{


    render(){
        const {monsters}: any = this.props;
        console.log(this.props)
        return(<>
        <div className="card-list">
        {monsters.map((monster: any,index: number) =>(
            <div className="card-container">
            <img src={`https://robohash.org/${index}}?set=set2&size=180x180`} alt={`monster ${monster.name}`} />
             <h1 key={monster.id}>{monster.name}</h1>
            </div>
        ))}
        </div>
        </>) 
    }
}
export default CardList