import React, { Component } from 'react'
import './styles.scss'
import Items from './Items'
import Packaging from './Packaging'
import Card from './Card'

export class BuildBox extends Component {
  render() {
    return (
      <div className="build-box-container">
        {true && (
          <div className="build-box-packaging">
            <Packaging
            />
          </div>
        )}
        {true && (
          <div className="build-box-ietms">
            <Items 
            items={this.props.items}
            />
          </div>
        )}
        <div className="build-box-card">
          <Card 
            card={this.props.card}
          />
        </div>
      </div>
    )
  }
}

export default BuildBox
