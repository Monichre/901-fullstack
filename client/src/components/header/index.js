import React from 'react'
import {Arrows} from '../arrows'
import './_header.scss'
import {BROWSER} from '../../utils/browser-detect'
              
const Header = props => {
  const conditionalArrows = props.noArrows ? null : <Arrows {...props} />
  return (
    <nav className="nav">
      <div className="menu">
        <div className="logo">
          <a href="/">
            <img src={BROWSER.isChrome() ? "/chrome/901W_FinalLogo.webp" : "/901W_FinalLogo.png"} alt="901W logo with paint splash" />
          </a>
        </div>
        {conditionalArrows}
      </div>
    </nav>
  )
}

export default Header
