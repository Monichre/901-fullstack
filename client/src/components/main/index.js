import React, { Component } from 'react'
import { Section } from './section'
import { Parallax } from 'react-spring'
import './_main.scss'


class Main extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.current !== this.props.current) {
      this.refs.parallax.scrollTo(this.props.current)
    }
  }

  handleNextClick = () => {
    this.props.scrollNext()
  }

  render() {
    const {current,isMobile} = this.props 
    const _about = `Embrace living street living at 901W in the historic and thriving Shaw.  This lively community engages the vibrancy and vitality of its surroundings, anchored by a new pedestrian-centric street that bisects the property to flow between 9th Street and Florida Avenue. Directly above, the studio-to-two bedroom residences emanate refined comfort with floor-to-ceiling windows, wide plank flooring, and spacious layouts. Soak up the outdoors and spectacular city views from the rooftop swimming pool and lounge, or step out to the animated streetscape below to explore the restaurants, shopping, and nightlife of DC’s most exciting neighborhood.`
    return (
      <div className="Main" style={{ position: 'relative' }}>
        <Parallax className="container" ref={'parallax'} pages={3} horizontal scrolling={false}>
          <Section 
            current={current}
            offset={0}
            slide={1}
            gradient="intro"
            caption="Living Street Living"
            first=""
            second="Brand New Apartments and Retail Coming Early 2019"
          />
          <Section
            isMobile={isMobile}
            current={current} offset={1} slide={2} gradient="page" caption="Where the street comes alive" first="" second={_about} scrollNext={this.handleNextClick} />
          <Section 
            current={current} offset={2} slide={3} gradient="page" caption="Leave your information for updates on our brand new apartments, arriving early 2019." first="" second="" />
        </Parallax>
      </div>
    )
  }
}

export default Main
