import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import AboutUsPage from './pages/AboutUsPage';

// import './App.css';
// import LandingPage from './pages/LandingPage';
import CalendarPage from './pages/CalendarPage';
import TaskPage from './pages/TaskPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* <LandingPage /> */}

        <div className="container px-0 text-center">
          <div className="row d-flex justify-content-center">
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route path="/task" component={TaskPage} />
              <Route path="/calendar" component={CalendarPage} />
              <Route path="/about-us" component={AboutUsPage} />
              {/* Route to landing page for testing*/}
              <Route path="/landing" component={LandingPage} />
              <Route path="/login" component={LoginPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
