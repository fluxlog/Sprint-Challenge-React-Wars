import React from "react"
import styled from "styled-components"
import { CardImg } from "reactstrap"


const Styles = styled.section`
border: 3px dotted purple;
color: teal;
background-color: black;
font-family: "Comic Sans MS", cursive, sans-serif;
border-radius: 10%;
`;

const PeopleCards = props => {
return (

<Styles>
    <div>
        <CardImg className="card_img"
        width= "200px"
        src={`https://starwars-visualguide.com/assets/img/characters/${props.index}.jpg`}
        />
        <h1>Name: {props.name}</h1>
        <h3>Birth Year: {props.birth_year}</h3>
        <h3>Gender: {props.gender}</h3>
        <h3>Eye Color: {props.eye_color}</h3>
    </div>
</Styles>
)

}
export default PeopleCards