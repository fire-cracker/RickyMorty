import React, { FC, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'

import Character from '../../components/Character'
import {getOneCard} from '../../components/apiCalls'

import './style.scss'

export const OnePlayCardPage: FC<RouteComponentProps<{ id: string }>> = ({ history, match }) => {
  const [character, setCharacter] = useState<any>({})

  useEffect(() => {
    (async() => {
      const { params: { id } } = match
      const { data } = await getOneCard(id)
      setCharacter(data)

      history.push({ state: { character: data } })
    })()
  }, [])

    const { image, name, species, status, gender, location } = character
    let newLocation
    if (location)([newLocation] = location.name.split(" "));
    return (
      <div className="layout">  
      <div className="pictureCard">
       <Character image={image} alt={name}/>
       <div className="details">
         <p className="details--name">{name}</p>
         <p>Gender: {gender}</p>
         <p>Specie: {species}</p>
         <p>Status: {status}</p>
         <p>Location: {newLocation}</p>
       </div>
      </div>
      </div>
    )
} 

export default OnePlayCardPage