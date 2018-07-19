import React from 'react'
import { JBG } from '../icons'
import './_social.scss'

export const Social = () => (
  <nav className="social">
    <ul>
      <li className="vertical">
      </li>
      <li className="vertical jbg">
        <a href="https://www.jbgsmith.com/" onClick={() => console.log("clicked")} target="_blank" rel="noopener"><span className=""><JBG /></span></a>
      </li>
    </ul>
  </nav>
)


