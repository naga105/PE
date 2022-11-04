const ADD_PRODUCT = "addProduct";
const REMOVE_PRODUCT = "removeProduct";
const UPDATE_PRODUCT = "updateProduct";
export const getAddProduct = (payload, list) => {
  console.log(payload);
  return {
    type: ADD_PRODUCT,
    payload: [...list, payload],
  };
};
export const getRemoveProduct = (list, product) => {
  return {
    type: REMOVE_PRODUCT,
    payload: list.filter((p) => p.id !== product.id),
  };
};
export const getUpdateProduct = (list, product) => {
  console.log(list);
  const index = list.filter((p) => p.id !== product.id);
  console.log(index);
  const newList = [...index, product];

  return {
    type: UPDATE_PRODUCT,
    payload: [...index, product],
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log("add");
      return {
        ...state.product,
        product: action.payload,
      };
    case REMOVE_PRODUCT:
      console.log("remove");
      return {
        ...state,
        product: action.payload,
      };
    case UPDATE_PRODUCT:
      console.log("update");
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};
