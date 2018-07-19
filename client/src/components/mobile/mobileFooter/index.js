import React from 'react'
import { EH, ADA, JBG } from '../../icons'


const MobileFooter = props => (
  <footer className="mobile_footer">
  <div className="address">
    <a href="https://goo.gl/maps/yULsjLPQrRH2" target="_blank" rel="noopener">
      901 W Street NW, Washington, DC 20001 <br />
      <span className="copyright ">&copy; 2018 JBG SMITH Properties</span>
    </a>
  </div>
  <div className="logos">
      <EH className="eh" />
      <a href="https://www.jbgsmith.com" className="jbg">
        <JBG />
      </a>
      <ADA className="ada" />
    </div>
  <div className="privacy">
    <a href="https://www.jbgsmith.com/privacy-policy" target="_blank" rel="noopener">
      Privacy Policy
    </a>
  </div>
</footer>
)

export default MobileFooter
