import React, { Component } from 'react'
import './styles.scss'
import './responsive.css'

export class CartItem extends Component {
  cartItemsString = (items) => {
    let itemsString = ' '
    items.map((item) => {
      if (item.count !== 0) itemsString += ` ${item.count} x ${item.title},`
    })
    return itemsString
  }

  render() {
    let customAttributes = {}
    this.props.customAttributes.map((attribute) => {
      customAttributes[attribute['key']] = attribute['value']
    })
    return (
      <div className="cart-item-container">
        <div className="cart-item-image-contents">
          <div className="item-image">
            <img className="box-item-image" src={this.props.image} />
          </div>
          <div className="cart-item-contents">
            <div className="item-title-container">
              <div className="item-title">{this.props.title}</div>
              <div className="item-title-subtext">{customAttributes.Box}</div>
            </div>
            <div className="item-card">
              <b>Card: </b> {customAttributes.Card}
            </div>
            {customAttributes.To && (
              <div className="item-card">
                <b>To: </b> {customAttributes.To}
              </div>
            )}
            {customAttributes.From && (
              <div className="item-card">
                <b>From: </b> {customAttributes.From}
              </div>
            )}
            {customAttributes.Message && (
              <div className="item-card">
                <b>Message: </b> {customAttributes.Message}
              </div>
            )}
            {/*(
              <div className="item-contents">
                <b>Gift Box Contents: </b>{' '}
                {this.props.item.selectedProducts &&
                  this.cartItemsString(this.props.item.selectedProducts)}
              </div>
            )*/}
            <div
              className="item-remove"
              type="button"
              onClick={(e) => {
                e.preventDefault()
                this.props.removeLineItem(this.props.checkoutId, [
                  this.props.id
                ])
              }}
            >
              Remove
            </div>
          </div>
        </div>
        <div className="cart-item-price">{this.props.price}</div>
        <div className="cart-item-quantity">
          <div className="cart-item-input-wrap">
            <div
              className="cart-item-increase-decrease"
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              -
            </div>
            <input
              type="text"
              disabled={true}
              placeholder={this.props.quantity}
            />
            <div
              className="cart-item-increase-decrease"
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              +
            </div>
          </div>
        </div>
        <div className="cart-item-subtotal">
          {parseInt(this.props.price, 10) * parseInt(this.props.quantity, 10)}
        </div>
      </div>
    )
  }
}

export default CartItem
