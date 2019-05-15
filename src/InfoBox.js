import React, { Component } from 'react';
import './InfoBox.css';

class InfoBox extends Component {
  render() {
    return (
      <div className="info-box">
        <div>
          {this.props.info.title}
        </div>
        <div className="brace">
          {/* Open curlly brace */}
          <img className="curly_brace" src="" alt="curly_brace" />
        </div>
        <div>
          {this.props.info.text}
        </div>
        <div className="brace">
          {/* Close curly brace */}
          <img className="curly_brace" src="" alt="curly_brace" />
        </div>
      </div>
    )
  }
}

export default InfoBox;
