import React from 'react'
import { block as BEM } from 'bem-class'
import fetch from 'isomorphic-fetch'
import _ from 'lodash'

import ActivityIndicator from 'components/ActivityIndicator'

import './style.scss'

export default class LoginForm extends React.Component {
  static propTypes = {}

  state = {
    username: '',
    password: '',
    email: '',
    firstname: '',
    lastname: '',
    loading: false,
    currentForm: 'login',
    messages: {}
  }

  constructor(props) {
    super(props)

    this.onUsernameChange = this.onUsernameChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onFirstNameChange = this.onFirstNameChange.bind(this)
    this.onLastNameChange = this.onLastNameChange.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.submit = this.submit.bind(this)
    this.switchForm = this.switchForm.bind(this)
  }

  onFirstNameChange(e) {
    this.setState({ firstname: e.target.value });
  }

  onLastNameChange(e) {
    this.setState({ lastname: e.target.value });
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  submit() {
    const options = {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        register: (this.state.currentForm == 'signup')
      })
    }

    this.setState({ loading: true })
    var that = this;

    fetch('/login', options)
      .then((response) => {
        var json = response.json();
        if(response.status >= 200 && response.status < 300) {
          return json
        }
        return json.then(err => { throw err })
      })
      .then((json) => {
        if(json.error) {
          that.setState({ loading: false, messages: json.error })
        } else {
          window.location.href = '/dashboard';
        }
      })
      .catch((error) => {
        that.setState({ loading: false, messages: error.message })
      })
  }

  switchForm() {
    if(this.state.currentForm == 'login') {
      this.setState({ currentForm: 'signup', messages: {} })
    } else {
      this.setState({ currentForm: 'login', messages: {} })
    }
  }

  renderActivityIndicator(className) {
    if(this.state.loading) {
      return (
        <div className={className.element('activity-indicator')}>
          <ActivityIndicator />
        </div>
      )
    }
  }

  renderHeader(className) {
    return <div className={className.element('logo')}></div>
  }

  renderLoginForm(className) {
    if(this.state.loading == false && this.state.currentForm == 'login') {
      return (
        <div className={className.element('fields').modifier('login')}>
          {this.renderHeader(className)}
          <div className={className.element('field')}>
            <label>Username</label>
            <input type='text' value={this.state.username}
              onChange={this.onUsernameChange} />
            {this.renderMessageFor('username', className)}
          </div>
          <div className={className.element('field')}>
            <label>Password</label>
            <input type='password' value={this.state.password}
              onChange={this.onPasswordChange} />
            {this.renderMessageFor('password', className)}
          </div>
          {this.renderButton(className)}
        </div>
      )
    }
  }

  renderMessageFor(field, className) {
    if(this.state.messages[field]) {
      return _.map(this.state.messages[field], (message) => {
        return (
          <div className={className.element('message')} key={message}>
            {message}
          </div>
        )
      })
    }
  }

  renderSignupForm(className) {
    if(this.state.loading == false && this.state.currentForm == 'signup') {
      return (
        <div className={className.element('fields').modifier('signup')}>
          {this.renderHeader(className)}
          <div className={className.element('field')}>
            <label>First Name</label>
            <input type='text' value={this.state.firstname}
              onChange={this.onFirstNameChange} />
            {this.renderMessageFor('firstname', className)}
          </div>
          <div className={className.element('field')}>
            <label>Last Name</label>
            <input type='text' value={this.state.lastname}
              onChange={this.onLastNameChange} />
            {this.renderMessageFor('lastname', className)}
          </div>
          <div className={className.element('field')}>
            <label>Email Address</label>
            <input type='text' value={this.state.email}
              onChange={this.onEmailChange} />
            {this.renderMessageFor('email', className)}
          </div>
          <div className={className.element('field')}>
            <label>Username</label>
            <input type='text' value={this.state.username}
              onChange={this.onUsernameChange} />
            {this.renderMessageFor('username', className)}
          </div>
          <div className={className.element('field')}>
            <label>Password</label>
            <input type='password' value={this.state.password}
              onChange={this.onPasswordChange} />

            {this.renderMessageFor('password', className)}
          </div>
          {this.renderButton(className)}
        </div>
      )
    }
  }

  renderButton(className) {
    var text = 'Login';
    if(this.state.currentForm != 'login') {
      text = 'Register'
    }

    return (
      <div className={className.element('button')}
           onClick={this.submit}>
        {text}
      </div>
    )
  }

  renderSwitchLink(className) {
    if(this.state.loading == false) {
      if(this.state.currentForm == 'login') {
        return (
          <div className={className.element('switch-link')}>
            Don&#39;t have an account? <b onClick={this.switchForm}>Sign Up</b>
          </div>
        )
      } else {
        return (
          <div className={className.element('switch-link')}>
            Already have an account? <b onClick={this.switchForm}>Log In</b>
          </div>
        )
      }
    }
  }

  render() {
    const className = BEM('auth-form')

    return (
      <div className={className}>
        {this.renderActivityIndicator(className)}
        {this.renderLoginForm(className)}
        {this.renderSignupForm(className)}
        {this.renderSwitchLink(className)}
      </div>
    )
  }
}
