import React from 'react'

export default function PeopleDetail({person}) {

     function renderAttribute(attr, lable){
         return(
             <p>{lable}: {person[attr]}</p>
         )
     }
    return (
        <div>
            <h1>{person.name}</h1>
            {renderAttribute("birth_year", "Birth Year")}
            {renderAttribute("eye_color", "Eye Color")}
            {renderAttribute("gender", "Gender")}
            {renderAttribute("hair_color", "Hair color")}
            {renderAttribute("height", "Height [cm]")}
            {renderAttribute("mass", "Weight [kg]")}
        </div>
    )
}
