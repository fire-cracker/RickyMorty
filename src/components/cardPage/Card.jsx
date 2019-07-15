import React, {Component} from 'react'

import Character from '../PlayCard/Character'
import {getOneCard} from '../apiCalls'

import './style.scss'

export class OnePlayCardPage extends  Component {
  state = {
    data:""
  }

async componentDidMount() {
  const {match:{params:{id}}, history} = this.props
  const {data} = await getOneCard(id)
  this.setState({
    data:data
  })
  history.push({data})
}  

  render() {
    const {data:{image, name, species, status, gender, location}} = this.state
    let newLocation
    if (location)([newLocation] = location.name.split(" "));
    return (
      <div className="layout">  
      <div className="pictureCard">
       <Character image={image}/>
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
} 

export default OnePlayCardPage