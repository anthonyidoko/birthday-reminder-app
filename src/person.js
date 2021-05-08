import React from 'react'
import people from "./people"

function Person(props) {
    const {image,age,name} = props;
    return (
        <article>
        <img src={image}/>
        <h4>{name}</h4>
        <p>{age}</p>
        </article>
    )
}

export default Person
