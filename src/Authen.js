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

    promise.then(user => {
      var lout = document.getElementById('logout')
      lout.classList.remove('hide')
    })

    promise.catch(e => {
      var err = e.message;
      console.log(err);
      this.setState({ err })
    })
    var login = document.getElementById('login')
    login.classList.add('hide')
    var signup = document.getElementById('signup')
    signup.classList.add('hide')

    var lout = document.getElementById('logout')
    lout.classList.add('block')
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

    var login = document.getElementById('login')
    login.classList.add('hide')

    var signup = document.getElementById('signup')
    signup.classList.add('hide')

    var lout = document.getElementById('logout')
    lout.classList.add('block')
  }

  logout = () => {
    firebase.auth().signOut()

    var lout = document.getElementById('logout')
    lout.classList.add('hide')

    var login = document.getElementById('login')
    login.classList.add('block')

    var signup = document.getElementById('signup')
    signup.classList.add('block')
  }
  
  
  
  render() {
    return(
      <div>
      <br />
        <input id="email" ref="email" type="email" placeholder="Enter your email" /> <br /><br />
        <input id="pass" ref="pass" type="password" placeholder="Enter your password" /> <br /><br />

        <p>{this.state.err}</p>
        <button id="login" onClick={this.login}>Log In</button>
        <button id="signup" onClick={this.signup}>Sign Up</button>
        <button id="logout" className="hide" onClick={this.logout}>Log out</button>
      </div>
    )
  }
}

export default Authen;