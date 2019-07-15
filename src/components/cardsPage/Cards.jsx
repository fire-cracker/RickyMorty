import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Character from '../PlayCard/Character'
import { getCards } from '../apiCalls'
import './style.scss';


export class PlayCards extends Component {
  state = {
    playCards: []
  }

  async componentDidMount() {
    const response = await getCards()
    const { data: { results } } = response
    this.setState({
      playCards: results
    })
  }

  onClickImage(imageId) {
    const { history } = this.props
    history.push(`/playCard/${imageId}`,)
  }

  render() {
    const { playCards } = this.state
    const renderPlayCards = playCards && playCards.map(({ image, id, name }, index) => {
      return index < 8 && (
        <div className="playCard">
        <Character key={index} className="griditem" image={image} onClick={() => this.onClickImage(id)} />
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
}

PlayCards.propTypes = {
  getCards: PropTypes.func
}



export default PlayCards;