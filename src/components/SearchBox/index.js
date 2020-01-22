import React from 'react'
import styled from 'styled-components'

const Search = styled.input`
  border: none;
  outline: none;
  line-height: 100px;
  width: 400px;
  padding: 10px 12px;
  border-radius: 4px;
  font-size: 50px;
`

const Container = styled.div`
  text-align: center;
  width: 100%;
`

export const SearchBox = ({ placeholder, handleChange, type, value }) => (
  <Container>
    <Search
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
    />
  </Container>
)
