import './card.styles.css'

const Card = ({ monster : {name,email,id}, index }: any) => {

    // const { name, email, id } = monster;

    return (<>
        <div className="card-container" key={id}>
            <img src={`https://robohash.org/${index}}?set=set2&size=180x180`}
                alt={`monster ${name}`} />
            <h2 key={id}>{name}</h2>
            <p>{email}</p>
        </div>
    </>)
}

export default Card