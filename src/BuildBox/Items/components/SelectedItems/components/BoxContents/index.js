import React, { Component } from 'react'
import './styles.scss'
import './responsive.css'

class BoxContents extends Component {
  render() {
    return (
      <div className="box-contents-container">
        <div className="box-contents-title">Box Contents</div>
        <div className="box-contents-list">
          {this.props.selectedProducts.map((product) => {
            var boxItemCountClass = 'box-item-count'
            var boxItemRemoveClass = 'box-item-remove'
            if (product.count == 0) {
              boxItemCountClass += ' invisible'
              boxItemRemoveClass += ' invisible'
            }
            return (
              <div className="box-item" key={1}>
                <div className={boxItemCountClass}>{product.count}</div>
                <div className="box-item-name">{product.title}</div>
                <div className="box-item-price">Rs. {product.price}</div>
                <div
                  className={boxItemRemoveClass}
                  onClick={() => this.props.removeFromBox(product)}
                >
                  {product.count !== 0 && (
                    <button
                      type="button"
                      className="close"
                      aria-label="Close"
                      className="remove-item-button"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        <div className="box-contents-sub-section">
          <div className="box-contents-sub-title">
            Current Packaging |{' '}
            {`${this.props.totalVolumetricWeight > 4 ? 'Big ' : 'Small '} ${
              this.props.selectedBox
            }`}
          </div>
          <div className="box-contents-sub-total">
            Box Subtotal: Rs. {this.props.subTotal}
          </div>
          <div
            className="complete-box-button"
            onClick={() =>
              this.props.selectedItemsCount >= 1 &&
              this.props.totalVolumetricWeight % 4 === 0
                ? this.props.setCurrentStep(2)
                : this.props.openInfoModal(
                    'Your Box is Empty / Partially filled',
                    "It looks like you haven't added completed your box. Please add more item before proceeding."
                  )
            }
          >
            <p className="complete-box-button-text">COMPLETE BOX</p>
          </div>
        </div>
      </div>
    )
  }
}

export default BoxContents
