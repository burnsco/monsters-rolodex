import React, { Component } from 'react'
import { CardList } from './components/CardList'
import { SearchBox } from './components/SearchBox'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      input: ''
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
  handleChange = e => {
    this.setState({ input: e.target.value })
  }

  render() {
    const { users, input } = this.state
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(input.toLowerCase())
    )

    return (
      <>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          type="search"
          value={input}
          handleChange={this.handleChange}
          placeholder="search..."
        />

        <CardList users={filteredUsers} />
      </>
    )
  }
}
