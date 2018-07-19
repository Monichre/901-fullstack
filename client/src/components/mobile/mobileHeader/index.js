import React from 'react'

import {BROWSER} from '../../../utils/browser-detect'
              
const MobileHeader = props => {
  return (
    <nav className="mobile_nav">
      <div className="menu">
        <div className="logo">
          <a href="/">
            <img src={BROWSER.isChrome() ? "/chrome/901W_FinalLogo.webp" : "/901W_FinalLogo.png"} alt="901W logo with paint splash" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default MobileHeader
