import React from 'react'
import './_arrows.scss'

export const Arrows = props => {
  const scrollLeft =
    props.current === 0 ? null : (
      <div className="scroll scroll_left" onClick={props.scrollPrev}>
        <div className="scroll_arrow"><img src='/up-arrow.svg' style={{transform: 'rotate(-90deg)'}} /></div>
        <span className="prevSlide text">{props.prevSlide}</span>
      </div>
    )
  return (
    <div className="arrows">
      {scrollLeft}
      <div className="scroll scroll_right" onClick={props.scrollNext}>
        <div className="scroll_arrow"><img src='/up-arrow.svg' style={{transform: 'rotate(90deg)'}} /></div>
        <span className="nextSlide text">{props.nextSlide}</span>
      </div>
    </div>
  )
}

export const AboutArrow = (props) => (
  <div className="about_arrow">
    <div className="scroll" onClick={props.scrollNext}>
      <h3 className="about_arrow_next_slide"><b>Coming to life early 2019</b></h3>
    </div>
  </div>
)
