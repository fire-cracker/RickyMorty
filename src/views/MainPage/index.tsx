import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router'

import Character from '../../components/Character'
import { getCards } from '../../components/apiCalls'
import './style.scss';


export const Cards: FC<RouteComponentProps> = ({ history }) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    (async () => {
      const { data: { results } } = await getCards()
      setCards(results)
    })()
  }, [])


  const onClickImage = (imageId: number) => {
    history.push(`/playCard/${imageId}`)
  }

  const renderPlayCards = cards && cards.map(({ image, id, name }, index) => {
    return index < 8 && (
      <div className="playCard" key={index}>
      <Character className="griditem" image={image} alt={name} onClick={() => onClickImage(id)} />
      <div className="details">
       <p className="details--name">{name}</p>
     </div>
      </div>
    )
  })

    return (
      <div className="App">
        <header className="App-header">
          <div className="play__cards__grid">
            {renderPlayCards}
          </div>
        </header>
      </div>
    )
}


export default Cards;