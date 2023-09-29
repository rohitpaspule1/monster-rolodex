import './card-list.styles.css'
import Card from "../card/card.component";

const CardList = ({ monsters }: any) => {

    return (<>
        <div className="card-list">
            {monsters.map((monster: any, index: number) => {

                return (<>
                    <Card monster={monster} index={index} />
                </>)
            })}
        </div>
    </>)
}
export default CardList