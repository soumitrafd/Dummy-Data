import React from 'react';
import './App.scss';
import Header from './common/header/header';
import Posts from './pages/posts/posts';
import PostDetails from './pages/postdetails/postdetails';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
   <>
   <Header/>
   <main className="container">
   <Router>
    <Switch>
      <Route path="/" exact>
        <Posts/>
      </Route>
      <Route path="/post">
        <PostDetails/>
      </Route>
    </Switch>
    </Router>
   </main>
   
   </>
  );
}

export default App;
