import {
    CARD_REQUEST_PRODUCT_LIST,
    CARD_RECEIVE_PRODUCT_LIST,
    CARD_ADD_TO_BOX,
    ITEMS_REMOVE_FROM_BOX
} from './actions'

const defaultState = {
    cardsList: [
        {
            image:
                'https://cdn.shopify.com/s/files/1/0558/2845/products/Prima_R_R_1500x_e57c9d18-56db-4e1f-8c29-c47dcd4ffc06_400x400.jpg?v=1595457079',
            title: 'Product 2'
        },
        {
            image:
                'https://cdn.shopify.com/s/files/1/0558/2845/products/HONEY_LAPCOS_FACE_MASK_ON_BOXFOX_400x400.jpg?v=1584646872',
            title: 'Product 3'
        },
        {
            image:
                'https://cdn.shopify.com/s/files/1/0558/2845/products/7A1A0884_Cropped_400x400.jpg?v=1531094633',
            title: 'Product 4'
        },
        {
            image:
                'https://cdn.shopify.com/s/files/1/0558/2845/products/49216187_072_b_400x400.jpeg?v=1556667066',
            title: 'Product 5'
        }
    ],
    selectedCard: {},
    dataIsFetching: false
}

const card = (state = defaultState, action) => {
    switch (action.type) {
        case CARD_REQUEST_PRODUCT_LIST:
            return {
                ...state,
                dataIsFetching: action.dataIsFetching
            }
        case CARD_RECEIVE_PRODUCT_LIST:
            return {
                ...state,
                dataIsFetching: action.dataIsFetching,
                cardsList: defaultState.productList // action.productList
            }
        case ITEMS_ADD_TO_BOX:
            let newSelectedProducts = state.selectedProducts
            if (state.selectedProducts.hasOwnProperty(action.product.title)) {
                newSelectedProducts[action.product.title]['count'] += 1
            } else {
                newSelectedProducts[action.product.title] = {
                    count: 1,
                    title: action.product.title,
                    price: action.product.price,
                    image: action.product.image
                }
            }
            return {
                ...state,
                selectedProducts: newSelectedProducts
            }
        case ITEMS_REMOVE_FROM_BOX:
            return state
        default:
            return state
    }
}

export default items
