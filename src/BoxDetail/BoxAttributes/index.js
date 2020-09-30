import React, { useState } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import BoxMessage from '../BoxMessage'
import Moment from 'react-moment'
import { random } from 'lodash'

const BoxAttributes = ({
  cardSelected,
  cardImage,
  boxSelected,
  boxImage,
  openCardModal,
  closeCardModal,
  boxesList,
  history,
  addItemToCart,
  checkoutId,
  variantId
}) => {
  const [quantity, setQuantity] = useState(1)
  const [selectedBox, setSelectedBox] = useState('ORIGINAL CRAFT BOX')
  const [changeTo, to] = useState('')
  const [changeFrom, from] = useState('')
  const [changeMessage, message] = useState('')

  const increaseItemQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseItemQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="box-attributes-main-container">
      <div className="quantity-field-container">
        <div className="quantity-title">QUANTITY</div>
        {false && (
          <div className="quantity-button-field">
            <div className="shop-item-input-wrap">
              <div
                className="shop-item-increase-decrease"
                onClick={() => {
                  decreaseItemQuantity()
                }}
              >
                -
              </div>
              <input type="text" disabled={true} placeholder={quantity}></input>
              <div
                className="shop-item-increase-decrease"
                onClick={() => {
                  increaseItemQuantity()
                }}
              >
                +
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="box-selection-container">
        <div className="box-selection-title">BOX COLOR</div>
        <div className="box-image-selection">
          <div
            className={`box-info ${
              selectedBox === 'ORIGINAL CRAFT BOX' ? 'box-selected' : ''
            }`}
            onClick={() => {
              setSelectedBox('ORIGINAL CRAFT BOX')
            }}
          >
            <img
              className="box-image"
              src="https://cdn.shopify.com/s/files/1/0445/1313/2702/files/main_box_brown.jpg?v=1601414146"
            />{' '}
            <div className="box-title">ORIGINAL CRAFT BOX</div>
          </div>
          <div
            className={`box-info ${
              selectedBox === 'TIL BLUE BOX' ? 'box-selected' : ''
            }`}
            onClick={() => {
              setSelectedBox('TIL BLUE BOX')
            }}
          >
            <img
              className="box-image"
              src="https://cdn.shopify.com/s/files/1/0445/1313/2702/files/main_box_blue.jpg?v=1601414145"
            />
            <div className="box-title">TIL BLUE BOX</div>
          </div>
        </div>
      </div>
      {cardSelected === '' ? (
        <div
          className="pick-card-container"
          type="button"
          onClick={(e) => {
            e.preventDefault()
            openCardModal()
          }}
        >
          <div className="pick-card-title">Pick a card</div>
        </div>
      ) : (
        <div>
          <div
            className="pick-card-container-selected"
            type="button"
            onClick={(e) => {
              e.preventDefault()
              openCardModal()
            }}
          >
            <img src={cardImage} className="selected-card-image" />
            <div className="selected-card-title-change-text">
              <div className="selected-card-title">{cardSelected}</div>
              <div className="selected-card-change">(change card)</div>
            </div>
          </div>
          <div>
            <BoxMessage
              to={to}
              from={from}
              message={message}
              changeTo={changeTo}
              changeFrom={changeFrom}
              changeMessage={changeMessage}
            />
          </div>
        </div>
      )}
      <div className="cart-button-container">
        <div
          className="cart-button-title"
          onClick={(e) => {
            e.stopPropagation()
            addItemToCart(checkoutId, [
              {
                variantId: variantId,
                quantity: 1,
                customAttributes: [
                  { key: 'Box', value: selectedBox },
                  { key: 'Card', value: cardSelected },
                  { key: 'To', value: 'Kaushik' },
                  { key: 'From', value: 'Varun' },
                  {
                    key: 'Message',
                    value:
                      'Happy Diwali Happy Diwali Happy Diwali Happy Diwali Happy Diwali Happy Diwali Happy Diwali Happy Diwali'
                  }
                ]
              }
            ])
          }}
        >
          {' '}
          Add to Cart . Rs 1000
        </div>
      </div>
      <div className="more-buttons-container">
        <div
          className="shop-more-button"
          onClick={(e) => {
            e.stopPropagation()
            history.push('/shop')
          }}
        >
          {' '}
          Shop More
        </div>
        <div
          className="checkout-button"
          onClick={(e) => {
            e.stopPropagation()
            history.push('/cart')
          }}
        >
          {' '}
          Checkout{' '}
        </div>
      </div>
    </div>
  )
}

export default BoxAttributes
