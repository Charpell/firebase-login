import React, { Component } from 'react';
var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyCTmx6-S-uPb-4DlfVrkgqEc-d1cSaC-pQ",
  authDomain: "usurvey-6cbc8.firebaseapp.com",
  databaseURL: "https://usurvey-6cbc8.firebaseio.com",
  projectId: "usurvey-6cbc8",
  storageBucket: "usurvey-6cbc8.appspot.com",
  messagingSenderId: "801918194089"
};
firebase.initializeApp(config);


class Authen extends Component {
  render() {
    return(
      <div>
        <input id="email" ref="email" type="email" placeholder="Enter your email" /> <br />
        <input id="pass" ref="pass" type="pass" placeholder="Enter your password" /> <br />

      </div>
    )
  }
}

export default Authen;