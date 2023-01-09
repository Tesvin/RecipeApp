import React, { useState } from 'react'

const SearchBar = (props) => {

const [finalEndPoint, setFinalEndPoint] = useState("")

  return (
    <form onSubmit={(e) => props.submitHandler(e, finalEndPoint)}>
        <input type="text"
        onChange={(e) => setFinalEndPoint(e.target.value)} />
        <button type="submit">submit</button>
      </form>
  )
}

export default SearchBar