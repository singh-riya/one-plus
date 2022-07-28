const defaultState = {
  images: [],
};

const app = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_IMAGES":
      return {
        ...state,
        images: action.payload,
      };

    default:
      return state;
  }
};
export default app;
