export const handleAddToCart = id => {
  return async (dispatch, getState) => {
    //do async code here
    dispatch({
      type: "ADD_ITEM_TO_CART",
      payload: id
    });
  };
};
