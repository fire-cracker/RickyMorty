import React from 'react';
import { withRouter } from 'react-router-dom';

import logo from './logo.png';
import './style.scss';

const Header = ({history, history:{location:{data,pathname}}}) => {
  const imageId = data && data.id
  const cardName = data && data.name

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