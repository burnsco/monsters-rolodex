import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`

export const CardList = props => <Card>{props.children}</Card>
