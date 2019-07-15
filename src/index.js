import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.scss';
import storeConfig from './redux/configStore';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Cards from './components/cardsPage/Cards';
import Card from './components/cardPage/Card'
import * as serviceWorker from './serviceWorker';

const store = storeConfig();

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
    <Header/>
        <Switch>
          <Route exact path="/" component={Cards}/>
          <Route path="/playCard/:id" component={Card}/>
        </Switch>
      <Footer/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
