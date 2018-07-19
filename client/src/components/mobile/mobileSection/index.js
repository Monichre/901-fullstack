import React from 'react'
import {MobileSlideOne, MobileSlideTwo, MobileSlideThree} from '../mobileSlide'

export const MobileSection = (props) => {
  if(props.number === 1) {
    return <MobileSlideOne {...props} />
  }
  if(props.number === 2) {
    return <MobileSlideTwo {...props} />
  }
  if(props.number === 3) {
    return <MobileSlideThree {...props} />
  }

}