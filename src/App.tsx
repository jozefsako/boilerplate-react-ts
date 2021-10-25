import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { LoginPage } from "./pages/Login/LoginPage";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-direction: row;

  li {
    margin: 0 20px 0 0;
    list-style-type: none;
    display: flex;
    align-items: center;
  }

  a {
    text-decoration:  none;
    color: #fff;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  line-height: 1.5em;
`;

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Nav>
            <Ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/login">Login</Link>
              </li>

              <li>
                <img src={logo} className="App-logo" alt="logo" />
              </li>
            </Ul>
          </Nav>
        </header>

        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
