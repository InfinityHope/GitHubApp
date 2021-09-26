import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Profile from './pages/Profile/Profile';
import Alert from './components/Alert/Alert'
import { AlertState } from './context/alert/AlertState';
import { GithubState } from './context/github/GithubState';
function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <div className="container pt-4">
            <Alert text={'Props alert'}/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/profile/:name" component={Profile}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>   
  );
}

export default App;