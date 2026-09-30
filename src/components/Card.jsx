function Card({id, url, name, clickHandler}){
    return (
        <div className="card" onClick={()=>clickHandler(id)}>
            <img src={url} />
            <p>{name}</p>
        </div>
    )
}
export default Card;