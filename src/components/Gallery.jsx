import React from 'react'
import Galleryitem from './Galleryitem'


const Gallery = (props) => {

const display = props.container.map((item, index) => {
    return (
        <Galleryitem item={item} key={index}/>
    )
})

  return (
    <div className='element'>
      {props.container.length > 0 ? <h1 className="text-4xl mt-6 mb-8">{props.endPoint.toUpperCase()} RECIPES</h1> : <h1 className="text-4xl mt-6 mb-8">Search For Recipes</h1>}
        {display}
    </div>
  )
}

export default Gallery