import React, {Component} from 'react'
import { IeSlide } from './ieSlide'
import Form from './form'
import Header from './header'
import Footer from './footer'
import {BROWSER} from '../../utils/browser-detect'
import './_ie.scss'

const _about = `Embrace living street living at 901W in the historic and thriving Shaw.  This lively community engages the vibrancy and vitality of its surroundings, anchored by a new pedestrian-centric street that bisects the property to flow between 9th Street and Florida Avenue. Directly above, the studio-to-two bedroom residences emanate refined comfort with floor-to-ceiling windows, wide plank flooring, and spacious layouts. Soak up the outdoors and spectacular city views from the rooftop swimming pool and lounge, or step out to the animated streetscape below to explore the restaurants, shopping, and nightlife of DC’s most exciting neighborhood.`
const ie_slides = [
  {
    title: 'home',
    caption: 'Living Street Living',
    first: 'Brand New Apartments and Retail Coming Early 2019',
    second: ''
  },
  {
    title: 'about',
    caption: 'Where the street comes alive',
    first: '',
    second: _about
  },
  {
    title: 'contact',
    caption: 'Leave your information for updates on our brand new apartments, arriving early 2019.',
    first: '',
    second: ''
  }
]

export default class IE extends Component {
  constructor() {
    super()
    this.state = {
      skipIntro: false,
      removeButton: false,
      addFooter: false,
      current: 0,
      next: 'about',
      prev: 'register for updates',
      isMobile: false
    }
  }

   componentDidMount() {
    const isMobile = BROWSER.mQ(780).matches
    const body = document.querySelector('body')
    
    
    if((BROWSER.isExplorer()|| BROWSER.isEdge()) && !body.classList.contains('ie')) {
      body.classList.add('ie')
      BROWSER.handlePolyfill()
      BROWSER.addObjectFindPolyfill()
    }
    if (isMobile) {
      this.setState({
        isMobile: true
      })
    }
  }

  handleNextClick = e => {

    const nextSlide = this.handleNextSlide()
    const { next, prev } = this.setSlidePreviews(nextSlide)
    this.scrollTo(nextSlide)
    this.setState({
      current: nextSlide,
      next: next,
      prev: prev
    })
  }

  scrollTo = (nextSlide) => {
    const home = document.getElementById('home')
    const about = document.getElementById('about')
    const contact = document.getElementById('contact')

    if(nextSlide === 0) {
      home.scrollIntoView()
    } else if (nextSlide === 1) {
      about.scrollIntoView()
    } else if (nextSlide === 2) {
      contact.scrollIntoView()
    }
  }

  handlePrevClick = e => {
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
      slides.next = 'about'
      slides.prev = 'register for updates'
    } else if (current === 1) {
      slides.next = 'register for updates'
      slides.prev = 'home'
    } else if (current === 2) {
      slides.next = 'home'
      slides.prev = 'about'
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


  render() {
    const { current, next, prev } = this.state

    return (
      <div className="ie_content">
      <Header
            scrollNext={this.handleNextClick}
            scrollPrev={this.handlePrevClick}
            nextSlide={next}
            current={current}
            prevSlide={prev}
          />
        {ie_slides.map((slide, i) => {
          if(i === 2) {
            return (
              <div className={`ie_slide ie_slide_${i}`} id={slide.title}>
                <Form />
              </div>
            )
          } else {
            return (
              <div className={`ie_slide ie_slide_${i}`} id={slide.title}>
            <IeSlide caption={slide.caption} first={slide.first} second={slide.second} slide={i}/>
          </div>
            )
          }
        }
        )}
        <Footer scrollNext={this.handleNextClick} current={current} /> 
      </div>
    )
  }
}
