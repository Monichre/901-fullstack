import React from 'react'
import {AboutArrow} from '../../arrows'

export const IeSlide = props => (
  <div className="ie_slide_content">
    <div className='ie_slide_left'/>
    <div className='ie_slide_right'/>
    <div className="inner">
    <h2 className="caption">{props.caption}</h2>
    <h4 className="first">{props.first}</h4>
    <p className="second">{props.second}</p>
    {props.slide === 1 ? <AboutArrow {...props}/> : null}
    </div>
  </div>
)
