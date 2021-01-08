const visibleFilterReducer = (state = "All", action) => {
  switch (action.type) {
    case "setVisibleFilter": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default visibleFilterReducer;
