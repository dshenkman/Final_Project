import React from 'react'
import './signin.css'

class Signin extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      signInUsername: '',
      signInPassword: ''
    }
  }



  onUserNameChange = (event) => {
    this.setState({signInUsername: event.target.value})
  }


  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

onSubmitSignIn = () => {
  fetch('http://localhost:3001/signin', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      username: this.state.signInUsername,
      password: this.state.signInPassword
    })
  })
  .then (response => response.json())
  .then(user => {
    if (user.id) {
      this.props.loadUser(user);
      this.props.onRouteChange('home')


    }
  })
}


  render() {
    const {onRouteChange} = this.props;

  return (
    <article id="borderbox" className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">

        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend id="font" className="f1 fw6 ph0 mh0">Sign In</legend>

              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
                <input
                 className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
                 type="text"
                 name="username"
                 id="username"
                 onChange = {this.onUserNameChange}
                 />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                 type="password"
                  name="password"
                   id="password"
                   onChange = {this.onPasswordChange}
                   />
              </div>
            </fieldset>
            <div className="">
              <input
              id="register"
              onClick = {this.onSubmitSignIn}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign In">
              </input>
            </div>

            <svg id="cont" xmlns="http://www.w3.org/2000/svg" width="125" height="120" fill="#008099" class="bi bi-controller" viewBox="0 0 16 16">
              <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"/>
              <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"/>
            </svg>

          </div>
        </main>
    </article>
      )
    }
}

export default Signin

// <div className="lh-copy mt3">
//   <p onClick={() => onRouteChange('register')} className='f6 link dim black db pointer'> Register </p>
// </div>
