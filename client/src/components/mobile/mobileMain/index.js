import React, { Component } from 'react'
import { MobileSection } from '../mobileSection'
import { BROWSER } from '../../../utils/browser-detect'

const slides = [
  {
    header: 'Living Street Living',
    sub_header: 'Brand New Apartments and Retail Coming Early 2019',
    content: '',
    cta: '',
    number: 1
  },
  {
    header: 'Where the street comes alive',
    sub_header: '',
    content:
      'Embrace living street living at 901W in the historic and thriving Shaw.  This lively community engages the vibrancy and vitality of its surroundings, anchored by a new pedestrian-centric street that bisects the property to flow between 9th Street and Florida Avenue. Directly above, the studio-to-two bedroom residences emanate refined comfort with floor-to-ceiling windows, wide plank flooring, and spacious layouts. Soak up the outdoors and spectacular city views from the rooftop swimming pool and lounge, or step out to the animated streetscape below to explore the restaurants, shopping, and nightlife of DC’s most exciting neighborhood.',
    cta: 'Coming to life early 2019',
    number: 2
  },
  {
    header: 'Leave your information for updates on our brand new apartments, arriving early 2019',
    sub_header: '',
    content: '',
    cta: '',
    number: 3
  }
]

class MobileMain extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const browser_width = document.body.offsetWidth
    const mobile_main = document.querySelector('.MobileMain')
    const body = document.querySelector('body')
    // BROWSER.isSmallerThanTablet(browser_width) || BROWSER.isLandscape()
    if (body.classList.contains('isMobile')) {
      window.addEventListener('scroll', () => {
        this.mobileScrollAnimation(mobile_main)
      })
    }
  }

  mobileScrollAnimation = mobile_main => {
    const nav = document.querySelector('.mobile_nav')
    const getCurrentScroll = () => window.pageYOffset || document.documentElement.scrollTop

    if (getCurrentScroll() >= 20) {
      nav.classList.add('shrink')
    } else {
      nav.classList.remove('shrink')
    }
  }

  render() {
    
    return (
      <div className="MobileMain" style={{ position: 'relative' }}>
         {slides.map((slide, i) => (
            <MobileSection
              key={i}
              header={slide.header}
              sub_header={slide.sub_header}
              content={slide.content}
              cta={slide.cta}
              number={slide.number}
            />
          ))}
      </div>
    )
  }
}

export default MobileMain
