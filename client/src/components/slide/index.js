import React from 'react'

export const Slide = props => (
  <div className="slide_content">
    <div className="inner">
    <h2 className="caption">{props.caption}</h2>
    <h4 className="first">{props.first}</h4>
    <p className="second">{props.second}</p>
    </div>
  </div>
)
