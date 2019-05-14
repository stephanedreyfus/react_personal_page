import React, { Component } from 'react'

class Project extends Component {
  render() {
    return (
      <div>
        <div>
          {/* Open curlly brace */}
          <img className="curly_brace" src="" alt="curly_brace" />
        </div>
        <div>
          {/* Content, Screenshot to hover to link */}
          {this.props.screenshot}
        </div>
        <div>
          {/* Close curly brace */}
          <img className="curly_brace" src="" alt="curly_brace" />
        </div>
      </div>
    )
  }
}

export default Project;
