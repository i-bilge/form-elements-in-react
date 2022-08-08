import React from 'react'

function Search(props) {
    const { handleSearch } = props;
  return (
    <input type="text" onChange={(event) =>
    handleSearch(event)}/>
  )
}

export default Search