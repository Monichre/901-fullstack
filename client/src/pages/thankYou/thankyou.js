import React, { Component } from 'react'
import Status from '../../components/status'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { BROWSER } from '../../utils/browser-detect'
import './_thankyou.scss'

class ThankYou extends Component {
  constructor() {
    super()
    this.state = {
      addFooter: false,
      isMobile: false
    }
  }

  componentDidMount() {
    const isMobile = BROWSER.mQ(780).matches
    const body = document.querySelector('body')

    if(BROWSER.isExplorer() || BROWSER.isEdge()) {
      body.classList.add('ie')
      BROWSER.handlePolyfill()
      BROWSER.addObjectFindPolyfill()
    }

    if (isMobile) {
      body.classList.add('isMobile')  
      this.setState({
        isMobile: true
      })
    }

    setTimeout(() => {
      this.setState({
        addFooter: true
      })
    }, 2000)
  }

  render() {
    const {isMobile} = this.state 
    const conditionalFooter = this.state.addFooter ? <Footer /> : null
    
    return (
      <div className="thankyou">
        <Header handleScrollClick={this.handleScrollClick} noArrows={true} />
        <Status />
        {conditionalFooter}
      </div>
    )
  }
}
export default ThankYou
