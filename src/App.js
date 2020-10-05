import React from 'react';
import './App.scss';
import Header from './common/header/header';
import Posts from './pages/posts/posts';
import PostDetails from './pages/postdetails/postdetails';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
   <>
   <Header/>
   <main className="container">
   <Router basename='/'>
      <Switch>
        <Route exact path='/' component={Posts}/>
        <Route path='/post/:id' component={PostDetails}/>
      </Switch>
    </Router>
   </main>
   </>
  );
}

export default App;
