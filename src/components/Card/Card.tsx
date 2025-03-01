import React, { ReactNode } from 'react'
import "./Card.css"

interface Props {
  children: ReactNode
}

const Card = (props: Props) => {
  return (
    <div className='card--container'>{props.children}</div>
  )
}

export default Card