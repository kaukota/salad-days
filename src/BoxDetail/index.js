import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

class BoxDetail extends Component {
  componentDidMount() {
    //this.props.fetchShopItems()
  }
  render() {
    return (
      <div className="box-detail-main-container">
        <div className="box-detail-header-container">Home</div>
        <div className="box-detail-slider-info">
          <div className="box-detail-slider">

          </div>
          <div className="box-detail-info">
            <div className="box-name">CABANA</div>
          </div>
        </div>
      </div>
    )
  }
}

export default BoxDetail
