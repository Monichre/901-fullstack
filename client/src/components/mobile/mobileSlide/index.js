import React from 'react'
import MobileForm from '../mobileForm'

export const MobileSlideOne = (props) => (
  <div className='mobile_slide slide_one'>
    <div className='inner'>
      <h2>{props.header}</h2>
      {props.sub_header.length > 0 ? 
      <h4>{props.sub_header}</h4> :
      null }
      <div className='images'>
        <img src="/building_window.gif" alt="" id='building'/>
        <img src="/cafe-animated.gif" alt="" className='cafe'/>
      </div>
    </div>
  </div>
)


export const MobileSlideTwo = (props) => (
  <div className='mobile_slide slide_two'>
    <div className='inner'>
      <h2>{props.header}</h2>
      {props.sub_header.length > 0 ? 
      <h4>{props.sub_header}</h4> :
      null }

       {props.content.length > 0 ? 
      <p>{props.content}</p> :
      null }
      <div className='images'>
        <img src="/dog_walker.gif" alt="" id='dog_walker' />
        <img src="/biker-animated.gif" alt="" id='biker' />
      </div>
    </div>
  </div>
)


export const MobileSlideThree = (props) => <MobileForm {...props} />