import React, { Component } from 'react'
import Splash from '../../components/splash'
import MobileHeader from './mobileHeader'
import MobileMain from './mobileMain'

import './_mobile.scss'

export default class Mobile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      skipIntro: false,
      removeButton: false,
      addFooter: false,
      isMobile: false,
      loadMain: false
    }
  }

  splashListener = isOver => {
    if (isOver) {
      this.skipIntro()
    }
  }

  loadMain = () => {
    setTimeout(() => {
      this.setState({
        loadMain: true
      })
    }, 2000)
  }



  skipIntro = () => {
    this.setState({
      skipIntro: true,
      removeButton: true
    })
    this.handleFooter()
  }

  handleFooter = () => {
    setTimeout(() => {
      this.setState({
        addFooter: true
      })
    }, 1000)
  }

  render() {
    const { addFooter, skipIntro, loadMain } = this.state
    const conditionalSplash = skipIntro ? null : <Splash splashIsOver={this.splashListener} />

    const conditionalMain =
      skipIntro || loadMain ? (
        <MobileMain style={{ position: 'relative' }} />
      ) : null

    const conditionalHeader =
      skipIntro || loadMain ? (
        <MobileHeader />
      ) : null

    return (
      <div style={{ position: 'relative' }}>
        {conditionalHeader}
        {conditionalSplash}
        {conditionalMain}
      </div>
    )
  }
}
