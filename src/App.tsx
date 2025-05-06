import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch,
  useParams,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/topics/*" element={<Topics />}>
            <Route path=":id" element={<Topic />}></Route>
          </Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useMatch({ path: "/topics", end: true })!;

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`/top/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.pathname}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      {/* <Routes>
        <Route path={`/top/:topicId`} element={<Topic />}></Route>
        <Route
          path={match.pathname}
          element={<h3>Please select a topic.</h3>}
        ></Route>
      </Routes> */}
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
