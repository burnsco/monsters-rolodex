import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  height: 100px;
  width: 600px;
  text-align: center;
`

export const SearchBox = () => <Input type="text" placeholder="text..." />
