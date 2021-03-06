import React, { useState } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import './responsive.css'
import BoxMessage from '../BoxMessage'
import { variables } from './noBoxSelectionList'

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
  variantId,
  enableColorSelection,
  clearBox,
  addLineItemInProgress,
  requestAddLineItem,
  price,
  openInfoModal,
  closeInfoModal,
  title
}) => {
  const [quantity, setQuantity] = useState(1)
  const [selectedBox, setSelectedBox] = useState('MATT KRAFT BOX')
  const [to, changeTo] = useState('')
  const [from, changeFrom] = useState('')
  const [message, changeMessage] = useState('')
  const [bought, setBought] = useState(false)

  const increaseItemQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseItemQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  let customAttributes = []
  console.log(variables)
  return (
    <div className="box-attributes-main-container">
      <div className="quantity-field-container">
        {false && <div className="quantity-title">QUANTITY</div>}
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
      {!variables.boxesList.includes(title) && (
        <div className="box-selection-container">
          <div className="box-selection-title">BOX COLOR</div>
          <div className="box-selection-summary">
            Select the color of your gift box
          </div>
          <div className="box-image-selection">
            <div
              className={`box-info ${
                selectedBox === 'MATT KRAFT BOX' ? 'box-selected' : ''
              }`}
              onClick={() => {
                setSelectedBox('MATT KRAFT BOX')
              }}
            >
              <img
                className="box-image"
                src="https://cdn.shopify.com/s/files/1/0445/1313/2702/files/main_box_brown.jpg?v=1601414146"
              />{' '}
              <div className="box-title">MATT KRAFT</div>
            </div>
            <div
              className={`box-info ${
                selectedBox === 'TEAL BLUE BOX' ? 'box-selected' : ''
              }`}
              onClick={() => {
                setSelectedBox('TEAL BLUE BOX')
              }}
            >
              <img
                className="box-image"
                src="https://cdn.shopify.com/s/files/1/0445/1313/2702/files/main_box_blue.jpg?v=1601414145"
              />
              <div className="box-title">TEAL BLUE</div>
            </div>
          </div>
        </div>
      )}
      <div className="card-selection-title">CARD SELECTION</div>
      {addLineItemInProgress ? (
        <div className="loading-icon">
          <img src="https://cdn.shopify.com/s/files/1/0445/1313/2702/files/Spinner-Big.gif?v=1603209336" />
        </div>
      ) : cardSelected === '' ? (
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
          <div></div>
        </div>
      )}
      {!addLineItemInProgress && (
        <BoxMessage
          to={to}
          from={from}
          message={message}
          changeTo={changeTo}
          changeFrom={changeFrom}
          changeMessage={changeMessage}
        />
      )}
      {!addLineItemInProgress && (
        <button
          className="cart-button-container"
          onClick={(e) => {
            e.stopPropagation()
            if (!cardSelected) openInfoModal('cardmiss')
            else {
              if (from) customAttributes.push({ key: 'From', value: from })
              if (to) customAttributes.push({ key: 'To', value: to })
              if (message)
                customAttributes.push({
                  key: 'Message',
                  value: message,
                })
              requestAddLineItem()
              addItemToCart(checkoutId, [
                {
                  variantId: variantId,
                  quantity: 1,
                  customAttributes: [
                    { key: 'Box', value: selectedBox },
                    { key: 'Card', value: cardSelected },
                    ...customAttributes,
                  ],
                },
              ]).then(() => {
                changeTo('')
                changeFrom('')
                changeMessage('')
                setBought(true)
                clearBox()
              })
              closeInfoModal()
              setTimeout(function () {
                openInfoModal('cartadded')
              }, 1500)
            }
          }}
        >
          <div className="cart-button-title"> Add to Cart . Rs {price}</div>
        </button>
      )}
      {bought && (
        <div className="more-buttons-container">
          <button
            className="shop-more-button"
            onClick={(e) => {
              e.stopPropagation()
              history.push('/shop')
            }}
          >
            {' '}
            Shop More
          </button>
          <button
            className="checkout-button"
            onClick={(e) => {
              e.stopPropagation()
              history.push('/cart')
            }}
          >
            Proceed to Buy
          </button>
        </div>
      )}
    </div>
  )
}

export default BoxAttributes
