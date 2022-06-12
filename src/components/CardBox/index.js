import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import db from "../../users.json"
import "./index.css"

function CardBox () {
  const characters = db
  const [lastDirection, setLastDirection] = useState()
  const [match, setMatch] = useState(false)


  const swiped = (direction, nameToDelete) => {
    const date = new Date()
    if(date % 2 === 0 && direction === "right"){
      setMatch(true)
    }
    else{
      setMatch(false)
    }
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>Tinder for Dogs Firebase 21</h1>
      <div className='cardContainer'>
        <TinderCard className='swipe' key="last" preventSwipe={['left','right','up','down']} swipeThreshold={0}>
          <div className='card' style={{backgroundColor: "#ebb029", display: "flex", alignItems: "center"}}>
              <h2>No more users near your area</h2>    
          </div>
        </TinderCard>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{"Dog name: "+character.dogName}<br/>{"Owner name: "+character.name}</h3>
              
            </div>
          </TinderCard>
        )}
        
      </div>
      {lastDirection && <h2 className='infoText'>You swiped {lastDirection} {match && "and it was a match"}</h2>}
    </div>
  )
}

export default CardBox