import { type } from '@testing-library/user-event/dist/type'
import "./button.css"
import React from 'react'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {}
const Button = (props: Props) => {
  return (
    <button {...props}/>
  )
}

export default Button

