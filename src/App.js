import React, { Component } from 'react'
import { CardList } from './components/CardList'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json =>
        this.setState(state => ({
          users: json
        }))
      )
  }

  render() {
    let users = this.state.users

    return (
      <>
        <CardList users={users} />
      </>
    )
  }
}
