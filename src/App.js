import React from 'react';
import { Switch , Route } from 'react-router-dom';
import './App.css';

import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import { auth } from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser: user});
    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render() {
    return(
    <div>
      {/* if we want a component link header to appear on every page place it outside of the switch   */}
      <Header currentUser={this.state.currentUser} />
      {/* Switch renders on one route witch matches. Useful when we  */}
     <Switch>
        {/* exact={ false } to keep exact as false default value is true */}
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInAndSignUp}/>
     </Switch>
    </div>
  );
  };
}

export default App;
