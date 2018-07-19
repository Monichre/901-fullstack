import React from 'react'
import { EH, ADA, JBG } from '../../icons'
import './_footer.scss'

const Footer = (props) => (
  <React.Fragment>
    <footer className="footer">
    <a href="https://www.jbgsmith.com" className="jbg"><JBG /></a>
    <p className="address">
      <a href="https://goo.gl/maps/yULsjLPQrRH2" target="_blank" rel="noopener">901 W Street NW, Washington, DC 20001 <br /> <span className="copyright ">&copy; 2018 JBG SMITH Properties</span> </a>
      <div className="logos">
        <div className="privacy"><a href="https://www.jbgsmith.com/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a></div>
        <EH className="eh" />
        <ADA className="ada" />
      </div>
    </p>
  </footer>
  </React.Fragment>
)

export default Footer
