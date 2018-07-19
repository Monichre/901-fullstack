import React, { Component } from 'react'
import './_form.scss'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  handleChange = e =>
    this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
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
    )
  }
}
export default Form
