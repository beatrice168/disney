import React, {useState,useEffect } from 'react'

 function DisneyList() {
  const[characters, setCharacters] =useState([])
  //function fetchedCharacters(){
    console.log(characters);
  //}
  useEffect(() => {
    fetch("https://api.disneyapi.dev/character/")
    .then((r)=>r.json())
    .then((characters)=>setCharacters(characters.data))
  },[]);
  
  return (
    <div className='charac'>
      {characters.map((character,index)=>(<div key={index}>
        <h2>{character.name}</h2> 
        <img src={character.imageUrl} alt="null" className="img" />
        <a href={character.sourceUrl} className='src'>
        click me for info
         </a>
      </div>))}
    </div>
  )
}
export default DisneyList;