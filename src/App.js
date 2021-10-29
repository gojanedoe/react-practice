import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
// "as" lets you rename imports
import './App.css';

import Nav from './Nav';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    // Wrap what you want to have routing available to with BrowserRouter
    <Router>
      <div className="App">
        <Nav />
        {/* Use Route for where you want a new route */}
        {/* path = to specify the URL path it should use - only checks if it contains at least part of the path */}
        {/* component = to specify component you want to render */}
        {/* Switch = stops at first path match, so it only renders one Route */}
        {/* exact = only if the path in a Route is exact should the component render */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default App;
