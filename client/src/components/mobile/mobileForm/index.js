import React, { Component } from 'react'
import { BROWSER } from '../../../utils/browser-detect'
import MobileFooter from '../mobileFooter'
class MobileForm extends Component {
  constructor() {
    super()
    this.state = {}
  }
componentDidMount() {
  
}
  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <div className="mobile_slide slide_three">
        <div className="inner">
          <h3>{this.props.header}</h3>
          <form
            id="form"
            name="contact"
            className="topBefore"
            acceptCharset="UTF-8"
            action="https://usebasin.com/f/ca139cb16e74"
            method="POST">
            <input type="hidden" name="form-name" value="contact" />
            <input id="name" type="text" name="name" placeholder="Name*" required onSubmit={this.handleChange} />
            <input id="email" name="email" type="text" placeholder="Email*" required onSubmit={this.handleChange} />
            <input id="phone" type="tel" name="phone" placeholder="Phone #" onSubmit={this.handleChange} />
            <button id="submit" type="submit">
            <img src={BROWSER.isChrome() ? `/logo_splatter.jpg` : `/logo_splatter.jpg`} alt="paint splatter" />
              Submit
            </button>
          </form>
          <div className='images'>
        <img src="/runner-animated.gif" alt="" id='runner'/>
        <img src="/cafe-animated.gif" alt="" className='cafe'/>
      </div>
        </div>
        <MobileFooter  />
      </div>
    )
  }
}
export default MobileForm
