import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home"

function App() {
  return (
    <Router>
      <div>
        <SubmitButton />

        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

function HomePage() {
  return <Home word = "Home"/>
}

function About() {
  return <h2>About</h2>;
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>
            <button type="button">
              components
            </button>
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function SubmitButton() {
  return (
    <ul>
      <li>
        <Link to="/">
          <button type="submit">
              Home
          </button>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <button type="button">
              About
          </button>
        </Link>
      </li>
      <li>
        <Link to="/topics">
          <button type="button">
              Topics
          </button>
        </Link>
      </li>
    </ul>
  );
}

export default App;
