import { useSelector, useDispatch } from 'react-redux'
import Client from 'shopify-buy'

const client = Client.buildClient({
  storefrontAccessToken: '8ccdc410d80589b42c1964ec1708a2d6',
  domain: 'testing-app-development-store.myshopify.com'
})

export const SHOP_REQUEST_ITEMS_LIST = 'SHOP_REQUEST_ITEMS_LIST'
export const SHOP_RECEIVE_ITEMS_LIST = 'SHOP_RECEIVE_ITEMS_LIST'
export const SHOP_REQUEST_ITEM = 'SHOP_REQUEST_ITEM'
export const SHOP_RECEIVE_ITEM = 'SHOP_RECEIVE_ITEM'
export const UNSET_SHOP_ITEM = 'UNSET_SHOP_ITEM'

export const fetchShopItems = (dataIsFetching = true) => {
  return  (dispatch) => {
    dispatch(requestShopItems(dataIsFetching))
    try {

      client.product.fetchAll().then((resp) => {
        dispatch(receiveShopItems(resp))
      }
      )
    } catch (e) {
      console.log('There is some problem',  e)
    }
  }
}


export const fetchShopItemData = (id, dataIsFetching=true) => {
  return  async (dispatch) => {
    dispatch(requestShopItem(dataIsFetching))
    try {
      const resp = await client.product.fetch(
        id
      )
      console.log(resp)
      dispatch(receiveShopItem(resp))
    } catch (e) {
      console.log('There is some problem',  e)
    }
  }
}

export const requestShopItems = (dataIsFetching) => {
  return {
    type: SHOP_REQUEST_ITEMS_LIST,
    dataIsFetching: dataIsFetching
  }
}

export const receiveShopItems = (shopItems) => {
  return {
    type: SHOP_RECEIVE_ITEMS_LIST,
    dataIsFetching: false,
    shopItems
  }
}


export const requestShopItem = () => {
  return {
    type: SHOP_REQUEST_ITEM,
  }
}

export const receiveShopItem = (shopItem) => {
  return {
    type: SHOP_RECEIVE_ITEM,
    dataIsFetching: false,
    shopItem
  }
}


export const unsetShopItemData = () => {
  return {
    type: UNSET_SHOP_ITEM
  }
}