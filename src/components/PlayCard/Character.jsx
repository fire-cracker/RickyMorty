import React from 'react'

const Character = ({ className, image, alt="", onClick}) => (
    <img className={className} src={image} alt={alt} onClick={onClick}/>
  )

export default Character