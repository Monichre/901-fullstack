import React, { Component } from 'react'
import './_form.scss'
import { Modal } from '../modal'
import {BROWSER} from '../../utils/browser-detect'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (nextProps.active) {
      setTimeout(() => {
        this.setState({
          showModal: true
        })
      }, 500)
    } else {
      this.setState({
        showModal: false
      })
    }
  }
  handleChange = e =>
    this.setState({ [e.target.name]: e.target.value })

  render() {
    const conditionalModal = this.state.showModal ? (
      <Modal>
        <div className="form_container">
          <h3>{this.props.caption}</h3>
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
              <img src='/logo_splatter.jpg' alt="paint splatter" />
              Submit
            </button>
          </form>
        </div>
      </Modal>
    ) : null
    return conditionalModal
  }
}
export default Form
