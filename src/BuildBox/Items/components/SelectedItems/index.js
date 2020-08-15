import React, { Component } from 'react'
import './styles.scss'

import SelectedImages from './components/SelectedImages'
import BoxContents from './components/BoxContents'

class SelectedItems extends Component {
  render() {
    return (
      <div className="selected-items-container">
        <div className="selected-items-meter">
          <div className="box-size">
            <div className="size-meter">
              <p
                className={`box-size-text ${
                  this.props.selectedBox === 'Small Box'
                    ? 'selected-box'
                    : 'non-selected-box'
                }`}
              >
                SMALL
              </p>
            </div>
          </div>
          <div className="box-size">
            <div className="size-meter">
              <p
                className={`box-size-text ${
                  this.props.selectedBox === 'Big Box'
                    ? 'selected-box'
                    : 'non-selected-box'
                }`}
              >
                BIG
              </p>
            </div>
          </div>
        </div>
        <div className="selected-items-data">
          <div className="selected-items-images">
            <SelectedImages
              selectedProducts={Object.values(this.props.selectedProducts)}
              removeFromBox={this.props.removeFromBox}
            />
          </div>
          <div className="selected-items-contents">
            <BoxContents
              selectedProducts={Object.values(this.props.selectedProducts)}
              removeFromBox={this.props.removeFromBox}
              setCurrentStep={this.props.setCurrentStep}
              subTotal={this.props.subTotal}
              selectedBox={this.props.selectedBox}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SelectedItems
