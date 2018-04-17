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
  constructor(props) {
    super(props);
  
    this.state = {
      err: ''
    }
  }

  login = (event) => {
    const email = this.refs.email.value;
    const password = this.refs.pass.value;
    console.log(email, password)

    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password)

    // Handle login Promise
    promise.catch(e => {
      var err = e.message;
      console.log(err);
      this.setState({ err })
    })
  }

  signup = () => {
    const email = this.refs.email.value;
    const password = this.refs.pass.value;
    console.log(email, password)

    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);

    promise.then(user => {
      var err = "Welcome " + user.email;
      firebase.database().ref('user/' + user.uid).set({
        email: user.email
      });
      console.log(user)
      this.setState({ err })
    });
    promise.catch(e => {
      var err = e.message;
      console.log(err)
      this.setState({ err })
    })
  }
  
  
  render() {
    return(
      <div>
      <br />
        <input id="email" ref="email" type="email" placeholder="Enter your email" /> <br /><br />
        <input id="pass" ref="pass" type="password" placeholder="Enter your password" /> <br /><br />

        <p>{this.state.err}</p>
        <button onClick={this.login}>Log In</button>
        <button onClick={this.signup}>Sign Up</button>
        <button onClick={this.logout}>Log out</button>
      </div>
    )
  }
}

export default Authen;