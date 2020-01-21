import React from 'react'
import styled from 'styled-components'
import { Card } from '../Card'

const Container = styled.div`
  width: 85vw;
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`

export const CardList = ({ users }) => (
  <Container>
    {users.map(user => (
      <Card user={user} key={user.id} />
    ))}
  </Container>
)
