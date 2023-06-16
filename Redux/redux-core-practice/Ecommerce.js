const { createStore } = require("redux");


const AddProduct = "ADD_PRODUCT";
const DeleteProduct = "DELETE_PRODUCT";
//state
const initialProductState = {
    products: ["sugar", "salt"],
    count: 2,
}
//actions
const addProductFunc = (value) => {
    return {
        type: AddProduct,
        payload: value,
    }
}
const deleteProductFunc = (value) => {
    return {
        type: DeleteProduct,
        payload: value,
    }
}

const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case AddProduct:
            return {
                ...state,
                products: [...state.products, action.payload],
                count: state.count + 1
            }
        case DeleteProduct:
            let updateProducts=[];
            for (let i = 0; i < state.products.length; i++) {
                if (action.payload !== state.products[i]) {
                    updateProducts.push(state.products[i]);
                }
            }
            return {
                ...state,
                products:updateProducts,
                count:state.count-1,
            }
        default:
            return state;
    }
}

const store = createStore(productReducer);
store.dispatch(addProductFunc("potato"));
store.dispatch(addProductFunc("rice"));
console.log(store.getState());
store.dispatch(deleteProductFunc("potato"))
console.log(store.getState())