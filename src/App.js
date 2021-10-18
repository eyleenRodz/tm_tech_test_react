
import React from "react";
import './styles/main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard";
import Login from "./features/login/Login";
import Menu from "./features/menu/Menu";
import { useAuth } from "./context/auth";


function App() {
  
  const { token, profile } = useAuth();
  return (
      <Router>
        {token &&
          <Menu />
        }
        <Switch>
            <Route path="/">
              {token ? <Dashboard/> : <Login/>}
            </Route>
            <Route path="*"> 
            <Redirect to="/" />
            </Route>
        </Switch>
      </Router>
  );
}

export default App;
