import React, { useState } from 'react'

const Galleryitem = (props) => {
  let [view, setView] = useState(false)

  const defaultView = () => {
    return (
      <div className='element-img'>
        <img src={props.item.image}
        alt="recipeImage"/>
        <h1>{props.item.title}</h1>
      </div>
    )
  }


  const simpleView = () => {
    return (
    <div className='element-div'>
      <h1>{props.item.title}</h1>
      </div>
    )
  }

  return (
    <div onClick={() => setView(!view)}
    style={{ 'display': 'inline-block' }}>

    {view ? simpleView() : defaultView()}

  </div>
  )
}

export default Galleryitem