import React from 'react'
import {BrowserRouter as Router,
        Route,
        Switch,
         Link,
} from 'react-router-dom'

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onUserNameChange = (event) => {
    this.setState({username: event.target.value})
  }


  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3001/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        username: this.state.username,
        password: this.state.password
      })
    })
    .then (response => response.json())
    .then(user => {
      if (user) {
        this.props.loadUser(user)
        this.props.onRouteChange('home')


      }
    })
  }

  render () {
  return (
    <Router>
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">

        <main className="pa4 black-80">
          <div className="measure ">
          <p>Not a user yet? Register here to sign up for KidsGames.com!</p>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" type ="text" htmlFor="name">Name</label>
                <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                 id="name"
                 onChange = {this.onNameChange} />
              </div>

              <div className="mt3">
                <label className="db fw6 lh-copy f6" type ="text" htmlFor="username">Username</label>
                <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="username"
                 id="username"
                 onChange = {this.onUserNameChange} />
              </div>

              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                 type="password"
                 name="password"
                   id="password"
                   onChange = {this.onPasswordChange}

                    />
              </div>
            </fieldset>
            <div className="">
              <input
              onClick = {this.onSubmitSignIn}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register" />
            </div>

          </div>
        </main>
    </article>
    </Router>
      )
    }
}

export default Register
