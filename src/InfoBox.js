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
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/home/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}

export default InfoBox;
