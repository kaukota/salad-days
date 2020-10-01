import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import './responsive.css'

import CartHeader from './CartHeader'
import CartItem from './CartItem'

import { increaseQuantity, decreaseQuantity, removeItem } from './actions'
import { removeLineItem } from './../Shop/actions'

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export class Cart extends Component {
  render() {
    return this.props.cart.checkout &&
      this.props.cart.checkout.lineItems.length > 0 ? (
      <div className="cart-main-container">
        <CartHeader />
        {this.props.cart.checkout.lineItems.map((lineItem) => {
          return (
            <CartItem
              id={lineItem.id}
              checkoutId={this.props.cart.checkoutId}
              image={lineItem.variant.image.src}
              customAttributes={lineItem.customAttributes}
              quantity={lineItem.quantity}
              title={lineItem.title}
              price={lineItem.variant.price}
              removeLineItem={this.props.removeLineItem}
            />
          )
        })}
        <div className="cart-footer-container">
          <div className="cart-checkout-subtotal-container">
            <div className="cart-subtotal">
              <div className="subtotal-text">SUBTOTAL</div>
              <div className="subtotal-value">
                Rs. {this.props.cart.checkout.totalPrice}
              </div>
            </div>
            <div
              className="cart-checkout-container"
              onClick={(e) => {
                e.preventDefault()
                window.location.replace(this.props.cart.checkout.webUrl)
              }}
            >
              CHECK OUT
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="cart-main-container">
        <div className="empty-cart">
          <div className="empty-cart-title">YOUR CART</div>
          <div className="empty-cart-subtitle">Your cart is empty</div>
          <div
            className="empty-cart-shop"
            type="button"
            onClick={() => this.props.history.push('/shop')}
          >
            Continue Browsing Here
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  {
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    removeLineItem
  }
)(Cart)
