import React, { useState } from 'react'

const SearchBar = (props) => {

const [finalEndPoint, setFinalEndPoint] = useState("")

  return (
    <form onSubmit={(e) => props.submitHandler(e, finalEndPoint)}>
        <input type="text"
        placeholder='Search Here' 
        className='border-b-4 border border-gray-900'
        onChange={(e) => setFinalEndPoint(e.target.value)} />
        <button className='pl-2 cursor-pointer submit' type="submit">SUBMIT</button>
        <button className='pl-4 cursor-pointer clear' onClick={props.clearData}>CLEAR</button>
      </form>
  )
}

export default SearchBar