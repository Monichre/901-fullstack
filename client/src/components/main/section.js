import React from 'react'
import { Parallax } from 'react-spring'
import Form from '../form'
import { Slide } from '../slide'
import { BROWSER } from '../../utils/browser-detect'


const LastSlide = props => <Form {...props} />
const ConditionalSlide = props =>
  props.slide === 3 ? (
    <LastSlide caption={props.caption} active={props.slide === 3 && props.current === 2 ? true : false} />
  ) : (
    <Slide {...props} />
  )
const slopeImage = slide => {
  if (slide === 1 && (BROWSER.isExplorer() || BROWSER.isEdge())) {
    return <img src="/ie/building__color.png" alt="colored building sketch" />
  } else if (slide === 2 && (BROWSER.isExplorer() || BROWSER.isEdge())) {
    return <img src="/ie/dog_walker__color.png" alt="Woman walking a dog sketch" />
  } else if (slide === 3 && (BROWSER.isExplorer() || BROWSER.isEdge())) {
    return <img src="/ie/runner__color.png" alt="A man running sketch" />
  }
}


export const Section = ({ current, offset, slide, caption, first, second, gradient, isMobile }) => (
  <React.Fragment>
    <Parallax.Layer className={`parallaxLayer parallax_offset_${offset}`} offset={offset} speed={0.2}>
      <div className={`slopeBegin slope_${slide}`}>
        {slopeImage(slide)}
      </div>
    </Parallax.Layer>

    <Parallax.Layer className={`parallaxLayer parallax_offset_${offset}`} offset={offset} speed={-0.2}>
      <div className={`slopeEnd ${gradient} slopeEnd_${slide}`} />
    </Parallax.Layer>

    <Parallax.Layer
      className={`parallaxLayer parallax_offset_${offset} text number number_${slide}`}
      offset={offset}
      speed={0.3}
    />

    <Parallax.Layer
      className={`parallaxLayer parallax_offset_${offset} text header header_${slide}`}
      offset={offset}
      speed={0.4}>
      <ConditionalSlide
        current={current}
        caption={caption}
        first={first}
        second={second}
        slide={slide}
        isMobile={isMobile}
      />
    </Parallax.Layer>
  </React.Fragment>
)
