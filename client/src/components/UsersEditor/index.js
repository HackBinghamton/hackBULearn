import _ from 'lodash'
import React from 'react'
import { block as BEM } from 'bem-class'

import ActivityIndicator from 'components/ActivityIndicator'
import EditableDocument from 'components/EditableDocument'

import './style.scss'

export default class UsersEditor extends React.Component {
  static propTypes = {
    fetchUsers: React.PropTypes.func.isRequired,
    saveUser: React.PropTypes.func.isRequired,
    deleteUser: React.PropTypes.func.isRequired,
    users: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  constructor(props) {
    super(props)
  }

  renderActivityIndicator(className) {
    if(this.props.users.isFetching) {
      return (
        <div className={className.element('activity-indicator')}>
          <ActivityIndicator />
        </div>
      )
    }
  }

  renderValidationErrors() {
    if(this.props.users.caughtError) {
      const errors = []

      if(this.props.users.error.errors) {
        _.values(this.props.users.error.errors).forEach((error) => {
          errors.push(
            <div className='alert alert-danger' key={error.message}>
              {error.message}
            </div>
          )
        })
      } else {
        errors.push(
          <div className='alert alert-danger' key='error'>
            {this.props.users.error.message}
          </div>
        )
      }

      return errors
    }
  }

  renderRows(className) {
    if(!this.props.users.isFetching) {
      return _.values(this.props.users.data).map((user) => {
        const columns = {
          'First Name': {
            key: 'local.firstname',
            type: 'text'
          },
          'Last Name': {
            key: 'local.lastname',
            type: 'text'
          },
          'Username': {
            key: 'local.username',
            type: 'text'
          },
          'Email': {
            key: 'local.email',
            type: 'text'
          },
          'Permission': {
            key: 'permission',
            type: 'select',
            choices: [
              'superuser',
              'administrator',
              'facilitator',
              'member'
            ]
          }
        }

        return (
          <EditableDocument row={user} columns={columns} key={user._id}
            updateDocument={this.props.saveUser}
            deleteDocument={this.props.deleteUser}/>
        )
      })
    }
  }

  render() {
    const className = BEM('users-editor')

    return (
      <div className={className}>
        {this.renderActivityIndicator(className)}
        {this.renderValidationErrors()}
        {this.renderRows(className)}
      </div>
    )
  }
}
