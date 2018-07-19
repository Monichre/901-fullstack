import React, {Component} from 'react'
import './_status.scss'

class Status extends Component {

  render() {
    return (
      <div className="status">
        <div className="inner">
          <div className='overlay'/>
          <p className="thanks">Thank you for signing up! <br /> We’re busy getting your future apartment ready and will be in contact with updates and information as we go.</p>
        </div>
      </div>
    )
  }
}

export default Status