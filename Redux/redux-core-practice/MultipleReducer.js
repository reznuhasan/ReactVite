const { createStore, combineReducers } = require("redux");

const getProduct = "GET_PRODUCT";
const addProduct = "ADD_PRODUCT";
const removeProduct = "REMOVE_PRODUCT";

const getCart = "GET_CART";
const addCart = "ADD_TO_CART";
//state
const initialProductState = {
    product: ["sugar", "salt"],
    productCount: 2,
}
const initialCartState = {
    product: ["sugar"],
    productCount: 1,
}
//actions
const getProductFunc = () => {
    return {
        type: getProduct
    }
}
const getCartFunc = () => {
    return {
        type: getCart
    }
}
const addProductFunc = (value) => {
    return {
        type: addProduct,
        payload: value
    }
}
const addCartFunc = (value) => {
    return {
        type: addCart,
        payload: value
    }
}
const removeProductFunc = (value) => {
    return {
        type: removeProduct,
        payload: value
    }
}
//reducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case getProduct:
            return { ...state }
        case addProduct:
            return {
                ...state,
                product: [...state.product, action.payload],
                productCount: state.productCount + 1,
            }
        case removeProduct:
            const result = state.product.filter(p => p !== action.payload);
            return {
                ...state,
                product: result,
                productCount: state.productCount - 1
            }
        default:
            return state
    }
}
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case getCart:
            return { ...state }
        case addCart:
            return {
                ...state,
                product: [...state.product, action.payload],
                productCount: state.productCount + 1,
            }
        default:
            return state
    }


}

//create store
const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
})
const store = createStore(rootReducer);
store.dispatch(addProductFunc("apple"));
store.dispatch(removeProductFunc("sugar"))
store.dispatch(removeProductFunc("salt"))
store.dispatch(addCartFunc("apple"));
console.log(store.getState());