import React, { Component } from 'react'
import Product from '../Product'

import './styles.scss'
import './responsive.css'

class ItemsList extends Component {
  render() {
    return (
      <div id="product-items-list-container" className="item-list-container">
        {this.props.productList.map((product) => (
          <Product
            product={product}
            weight={product.weight}
            image={product.image}
            price={product.price}
            discountPrice={product.discountPrice}
            quantity={product.quantity}
            addToBox={this.props.addToBox}
            removeFromBox={this.props.removeFromBox}
            title={product.title}
            key={product.title}
            selectedQuantity={
              this.props.selectedProducts[product.title]
                ? this.props.selectedProducts[product.title]['count']
                : 0
            }
            totalVolumetricWeight={this.props.totalVolumetricWeight}
            remainingVolumetricWeight={8 - this.props.totalVolumetricWeight}
            openDetailModal={this.props.openDetailModal}
            closeDetailModal={this.props.closeDetailModal}
          />
        ))}
      </div>
    )
  }
}

export default ItemsList
