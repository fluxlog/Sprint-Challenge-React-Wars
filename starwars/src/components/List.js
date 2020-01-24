import React, {useState, useEffect} from "react"
import axios from "axios"
import Cards from "./Cards"


function PeopleList () {
const [cards, setCards] = useState([]);


useEffect(() => {
axios.get("https://swapi.co/api/people/")
.then(response => {
    const listData = response.data.results;

    setCards(listData);
})
.catch(error => {
    console.log('404 no data!', error);
})

}, [])

return(
<div className ="container">
<div className ="peoples">
    {cards.map((card, index) => {


return(
    <Cards
    index={index+1}
    name={card.name}
    birth_year={card.birth_year}
    eye_color={card.eye_color}
    gender={card.gender}
    />
)
})}
</div>
</div>
)
}

export default PeopleList