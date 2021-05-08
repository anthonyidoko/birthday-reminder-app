import React, {useState} from 'react'
import "./index.css"
import {people,} from "./people"
import Person from "./person"

function Birthday(){
  const [birthday,setBirthday] = useState(people);

  const clearAll = ()=>{
    setBirthday((prevState)=>{
      return [];
    }) 
  }
  
  return(
    <section>
      <h3>{birthday.length} birthdays today</h3>
      {
        
      birthday.map((person)=>{
          const {id, image,name,age} = person;
          return (
            <Person key={id} {...person}></Person>
          )
        })
      }
      <button className="btn" type="button" onClick={clearAll}>Clear All</button>
    </section>
  )
}

export default Birthday
