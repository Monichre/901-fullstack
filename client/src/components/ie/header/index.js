import React from 'react'
import {Arrows} from '../arrows'
import './_header.scss'

const Header = props => {
  const conditionalArrows = props.noArrows ? null : <Arrows {...props} />
  return (
    <nav className="nav">
      <div className="menu">
        <div className="logo">
          <a href="/">
            <img src="/901W_FinalLogo.png" alt="901W logo with paint splash" />
          </a>
        </div>
        {conditionalArrows}
      </div>
    </nav>
  )
}

export default Header
