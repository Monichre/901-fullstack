import React, { Component } from 'react'
import Splash from '../../components/splash'
import Main from '../../components/main'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Mobile from '../../components/mobile'
import { BROWSER } from '../../utils/browser-detect'
import IE from '../../components/ie'
import _ from 'lodash'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      skipIntro: false,
      removeButton: false,
      addFooter: false,
      current: 0,
      next: 'About',
      prev: 'Register for updates',
      isMobile: false,
      loadMain: false
    }
  }

  componentDidMount() {
    const isMobile = BROWSER.mQ(780).matches || window.orientation === 90
    const body = document.querySelector('body')
    this.loadMain()
    
    if (BROWSER.isExplorer() || BROWSER.isEdge()) {
      body.classList.add('ie')
      BROWSER.handlePolyfill()
      BROWSER.addObjectFindPolyfill()
    }
    if (BROWSER.isChrome() && !(BROWSER.isExplorer() || BROWSER.isEdge())) {
      body.classList.add('isChrome')
    }
    if (isMobile) {
      body.classList.add('isMobile')
      this.setState({
        isMobile: true
      })
    }
    window.addEventListener('resize', _.debounce(this.resizeListener, 100))
  }

  resizeListener = () => {
    const body = document.querySelector('body')
    const browser_height = document.body.offsetHeight
    const browser_width = document.body.offsetWidth  
    
    if (BROWSER.isShrinkingVertically(browser_height) || browser_width <= 780) {
      body.classList.add('isMobile')
      this.setState({
        isMobile: true
      })
      this.forceUpdate()
    }
    
    if(browser_width > 780 && !BROWSER.isShrinkingVertically(browser_height)) {
      body.classList.remove('isMobile')
      this.setState({
        isMobile: false
      })
      this.forceUpdate()
    }
  }

  splashListener = isOver => {
    if (isOver) {
      this.skipIntro()
    }
  }

  handleNextClick = e => {
    if (e) {
      e.preventDefault()
    }
    const nextSlide = this.handleNextSlide()
    const { next, prev } = this.setSlidePreviews(nextSlide)
    this.setState({
      current: nextSlide,
      next: next,
      prev: prev
    })
  }

  loadMain = () => {
    setTimeout(() => {
      this.setState({
        loadMain: true
      })
    }, 2000)
  }

  handlePrevClick = e => {
    if (e) {
      e.preventDefault()
    }
    const prevSlide = this.handlePrevSlide()
    const { next, prev } = this.setSlidePreviews(prevSlide)
    this.setState({
      current: prevSlide,
      next: next,
      prev: prev
    })
  }

  setSlidePreviews = current => {
    let slides = {}
    if (current === 0) {
      slides.next = 'About'
      slides.prev = 'Register for updates'
    } else if (current === 1) {
      slides.next = 'Register for updates'
      slides.prev = 'Home'
    } else if (current === 2) {
      slides.next = 'Home'
      slides.prev = 'About'
    }
    return slides
  }

  handleNextSlide = () => {
    const { current } = this.state
    let index = current
    return index + 1 <= 2 ? index + 1 : 0
  }

  handlePrevSlide = () => {
    const { current } = this.state
    let index = current
    return index - 1 < 0 ? 2 : index - 1
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
    const { current, next, prev, addFooter, skipIntro, removeButton, isMobile, loadMain } = this.state
    const conditionalSplash = skipIntro ? null : <Splash splashIsOver={this.splashListener} />
    const conditionalMain =
      skipIntro || loadMain ? (
        <Main
          current={current}
          style={{ position: 'relative' }}
          scrollNext={this.handleNextClick}
          isMobile={isMobile}
        />
      ) : null
    const conditionalHeader =
      skipIntro || loadMain ? (
        <Header
          scrollNext={this.handleNextClick}
          scrollPrev={this.handlePrevClick}
          nextSlide={next}
          current={current}
          prevSlide={prev}
        />
      ) : null
    const conditionalFooter = addFooter ? <Footer scrollNext={this.handleNextClick} current={current} /> : null

    if (isMobile) {
      return <Mobile />
    } else if (BROWSER.isExplorer() || BROWSER.isEdge()) {
      return <IE />
    } else {
      return (
        <div style={{ position: 'relative' }}>
          {conditionalHeader}
          {conditionalSplash}
          {conditionalMain}
          {conditionalFooter}
        </div>
      )
    }
  }
}

export default Home
