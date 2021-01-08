const initialState = {
  allIds: [],
  byIds: {},
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTodo": {
      const { id, content } = action.payload;
      return {
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
          },
        },
      };
    }
    case "toggleTodo": {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default todosReducer;
