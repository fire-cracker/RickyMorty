import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { StaticContext } from 'react-router';

import { ICharacter } from '../../types'
import logo from './logo.png';
import './style.scss';

const Header: FC<RouteComponentProps<{}, StaticContext, { character: ICharacter }>> = ({ history }) => {
  const { location: { state, pathname } } = history

  const imageId = state && state.character.id
  const cardName = state && state.character.name

  function onclicklogo () {
      history.push("/")
  }

  return (
    <div className="header">
      <button className="header_logo" onClick={onclicklogo}>
        <div><img src={logo} className="App-logo" alt="logo" /></div>
        <div className="header_logo--text">RickyMorty</div>
      </button>
      <ul className="breadcrumb">
        <li><a href="/">Home</a></li>
       {pathname === "/"
         ? null
        : (<React.Fragment>
          <li ><a href={`/playCard/${imageId}`}>Card</a></li>
          <li>{cardName}</li>
          </React.Fragment>
          )
         
      }
      </ul>
    </div>
  )
}

export default withRouter(Header);