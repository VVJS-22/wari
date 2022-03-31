import React, { Suspense } from 'react';
import { HashRouter,Route,Switch } from 'react-router-dom';
import './App.css';
import BaseLayout from './Layout/BaseLayout';
import Login from './Pages/Login';

function App() {
  return (
    <React.Fragment>
    <HashRouter>
      <Suspense fallback = {<div>Loading....</div>} >
      <Switch>
      <Route path="/login" name="Login Page" render={props => <Login {...props}/>} />
        <Route path="/" name="Home" render={props => <BaseLayout {...props}/>} />
       </Switch>
       </Suspense>
    </HashRouter>
  </React.Fragment>
  );
}

export default App;
