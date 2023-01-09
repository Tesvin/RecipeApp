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
        {display}
    </div>
  )
}

export default Gallery