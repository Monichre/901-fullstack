import React, { Component } from 'react'
import './_splash.scss'
import {BROWSER} from '../../utils/browser-detect'

class Splash extends Component {
  state = {
    removeSelf: false
  }
  componentDidMount() {
    let modalTrigger = document.querySelector('.cd-modal-trigger')
    let transitionLayer = document.querySelector('.cd-transition-layer')
    let transitionBackground = document.querySelector('.bg-layer')
    let modalWindow = document.querySelector('.cd-modal')
    let button = document.getElementById('skipIntro')
    let frameProportion = 1.78
    let frames = 25
    let resize = false

    this.animate(modalTrigger, transitionLayer, transitionBackground, modalWindow, frameProportion, frames, resize)

    setTimeout(() => {
      this.runTrigger()
    }, 0)
    button.style.opacity = 1
    setTimeout(() => {
      this.handleModal()
    }, 3000)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.removeSelf !== this.state.removeSelf && this.state.removeSelf) {
      let splash = document.querySelector('.Splash')

      setTimeout(() => {
        this.props.splashIsOver(true)
        splash.style.display = 'none'
      }, 1000)
    }
  }

  animate = (modalTrigger, transitionLayer, transitionBackground, modalWindow, frameProportion, frames, resize) => {
    this.setLayerDimensions(
      modalTrigger,
      transitionLayer,
      transitionBackground,
      modalWindow,
      frameProportion,
      frames,
      resize
    )
    window.addEventListener('resize', e => {
      e.preventDefault()
      if (!resize) {
        resize = true
        !window.requestAnimationFrame
          ? setTimeout(this.setLayerDimensions, 300)
          : window.requestAnimationFrame(this.setLayerDimensions)
      }
    })
  }

  runTrigger = () => {
    let modalTrigger = document.querySelector('.cd-modal-trigger')
    let transitionLayer = document.querySelector('.cd-transition-layer')
    let transitionBackground = document.querySelector('.bg-layer')
    let modalWindow = document.querySelector('.cd-modal')

    if(transitionLayer) {
      transitionLayer.classList.add('visible', 'opening')
    }
    let delay = 600

    setTimeout(() => {
      if(modalWindow) {
        modalWindow.classList.add('visible')
      }
    }, delay)
    
  }

  handleModal = () => {
    let transitionLayer = document.querySelector('.cd-transition-layer')
    let transitionBackground = document.querySelector('.bg-layer')
    let modalWindow = document.querySelector('.cd-modal')

    if (transitionLayer) {
      transitionLayer.classList.add('closing')
      transitionBackground.classList.add('closing')
      modalWindow.classList.remove('visible')
      transitionBackground.addEventListener('webkitAnimationEnd oanimationend msAnimationEnd animationend', () => {
        transitionLayer.classList.remove('closing', 'opening', 'visible')
        transitionBackground.removeEventListener('webkitAnimationEnd oanimationend msAnimationEnd animationend')
      })
      this.setState({
        removeSelf: true
      })
    }
  }

  setLayerDimensions = (
    modalTrigger,
    transitionLayer,
    transitionBackground,
    modalWindow,
    frameProportion,
    frames,
    resize
  ) => {
    let windowWidth = window.offSetWidth
    let windowHeight = window.offSetHeight
    let layerHeight
    let layerWidth

    if (windowWidth / windowHeight > frameProportion) {
      layerWidth = windowWidth
      layerHeight = layerWidth / frameProportion
    } else {
      layerHeight = windowHeight * 1.2
      layerWidth = layerHeight * frameProportion
    }
    if (transitionBackground) {
      transitionBackground.style.width = layerWidth * frames + 'px'
      transitionBackground.style.height = layerHeight + 'px'
      resize = false
    }
  }

  handleButton = e => {
    e.preventDefault()
    this.props.splashIsOver(true)
  }

  render() {
    return (
      <div className="Splash">
        <div className="cd-div-content">
          <div className="center" />
        </div>
        <div className="cd-modal">
          <div className="modal-content">
            <img src={BROWSER.isChrome() ? "/chrome/901W_FinalLogo.webp" : "/901W_FinalLogo.png"} alt="" id="intro_logo" />
            <div id='skipContainer'>
            <button style={{ cursor: 'pointer' }} id="skipIntro" onClick={this.handleButton}>Skip Intro</button>
            </div>
          </div>
        </div>
        <div className="cd-transition-layer">
          <div className="bg-layer" />
        </div>
      </div>
    )
  }
}

export default Splash
