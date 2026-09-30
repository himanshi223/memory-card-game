import { useEffect, useState } from "react";
import getImages from "./Images.jsx";
import Card from "./Card.jsx";
const MAX = 12;

function CardContainer({movie, increaseScore, resetScore}){
    const [characters, setCharacters] = useState([]);
    const [visibleCards,setVisibleCards] = useState([]);
    const [clickedCards, setClickedCards] = useState([]);
    
    function randomize(characters){
        for(let i=characters.length-1;i>=0;i--){
            const random = Math.floor(Math.random()*10);
            [characters[random],characters[i]] = [characters[i],characters[random]]
        }
        return characters;
    }

    function displayCards(id){
        if(clickedCards.includes(id)){
            resetScore();
            setClickedCards([]);
        }
        else{
            increaseScore();
            setClickedCards([...clickedCards, id]);
            setVisibleCards(randomize(characters).slice(0,MAX));
        }
    }

    useEffect(()=>{
        getImages(movie).then(result => {
            setCharacters(result);
            setVisibleCards(randomize(result).slice(0,MAX));
        });
    },[movie]);


    const cards = visibleCards.map(character => {
        return <Card key={character.key} id={character.key} name={character.name}  url={character.url} clickHandler={displayCards}/>
    });

    return (
        <div className="card-container">
            {cards}
        </div>
    )
}

export default CardContainer;