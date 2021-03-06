import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home.jsx'
import BitcoinChart from './BitcoinChart/BitcoinChart.jsx'
import LoginPage from '../containers/LoginContainer.jsx';
import SignUpPage from '../containers/SignUpContainer.jsx';
import ProfilePage from '../containers/ProfileContainer.jsx';
import TranslationContainer from './../containers/TranslationContainer.jsx';

class Main extends React.Component {
  render() {
    return (
          <main>
            <Switch>
              <Route exact path='/' render={() => <Home cardtitleP={<TranslationContainer translationKey="title_text"/>} cardsubtitleP={<TranslationContainer translationKey="subtitle_text"/>}/>}/>    
              <Route path='/login' component={LoginPage}/>
              <Route path='/signup' component={SignUpPage}/>
              <Route path='/profile' component={ProfilePage}/>
              <Route path='/bitcoinchart' component={BitcoinChart}/>
            </Switch>
          </main>     
    )
  }  
}

export default (Main)