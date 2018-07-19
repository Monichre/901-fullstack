import React from 'react'
import { AboutArrow } from '../arrows'
import { EH, ADA, JBG } from '../icons'
import './_footer.scss'

const AboutContent = () => (
  <div id="AboutContent">
    <div className="inner">
      <h2 className="caption">Where the street comes alive</h2>
      <h4 className="first" />
      <p className="second">
        Embrace living street living at 901W in the historic and thriving Shaw. This lively community engages the
        vibrancy and vitality of its surroundings, anchored by a new pedestrian-centric street that bisects the property
        to flow between 9th Street and Florida Avenue. Directly above, the studio-to-two bedroom residences emanate
        refined comfort with floor-to-ceiling windows, wide plank flooring, and spacious layouts. Soak up the outdoors
        and spectacular city views from the rooftop swimming pool and lounge, or step out to the animated streetscape
        below to explore the restaurants, shopping, and nightlife of DC’s most exciting neighborhood.
      </p>
    </div>
  </div>
)

const MobileFooter = props => (
  <React.Fragment>
    
    {props.current === 1 ? <AboutContent /> : null}
    {props.current === 1 ? <AboutArrow {...props} /> : null}
    <footer className="footer mobile_footer">
      <div className="address">
        <a href="https://goo.gl/maps/yULsjLPQrRH2" target="_blank" rel="noopener">
          901 W Street NW, Washington, DC 20001 <br />
          <span className="copyright ">&copy; 2018 JBG SMITH Properties</span>
        </a>
        <div className="logos">
          <EH className="eh" />
          <a href="https://www.jbgsmith.com" className="jbg">
            <JBG />
          </a>
          <ADA className="ada" />
        </div>
      </div>
      <div className="privacy">
        <a href="https://www.jbgsmith.com/privacy-policy" target="_blank" rel="noopener">
          Privacy Policy
        </a>
      </div>
    </footer>
  </React.Fragment>
)

export default MobileFooter
