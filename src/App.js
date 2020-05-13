import React from 'react';
import {BrowserRouter,Switch, Route} from "react-router-dom";
import {Settings} from "./pages/Settings";
import {Header} from "./components/Header";
import Home from "./pages/Home";

const App = ()=> {
  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <Switch>
          <Route path={'/'} exact render={() => <Home/>}/>
          <Route path={'/settings'}  render={() => <Settings/>}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;