import React from 'react'
import Typography from './Typography'

const Card = ({ children, className, ...props }) => {
  return (
    <Typography variant="div" className={className} {...props}>
      {children}
    </Typography>
  )
}

export default Card