import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-grid-system';
import LandingPage from './components/villages/LandingPage.js';
import './styles/landing-page.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Demo from './components/villages/Demo.js';
class App extends React.Component {
render() {
  return (
    <Router>
      <div>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/demo" component={Demo}/>
      </div>
    </Router>
  )
}
}

ReactDOM.render(<App/>, document.getElementById('app'));

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBAwVopdFQO2bcBxkTDj4z1mlHN7jvhA54",
    authDomain: "react-test-9139f.firebaseapp.com",
    databaseURL: "https://react-test-9139f.firebaseio.com",
    projectId: "react-test-9139f",
    storageBucket: "react-test-9139f.appspot.com",
    messagingSenderId: "510018636277",
    appId: "1:510018636277:web:af9cf2dcda5cb70b6178bc",
    measurementId: "G-LY6PSYSY0K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
*/
