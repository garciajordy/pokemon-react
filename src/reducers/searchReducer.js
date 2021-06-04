const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case 'Pokemon':
      return {
        ...state,
        name: action.payload.name,
        height: action.payload.height,
        weight: action.payload.weight,
        img: action.payload.sprites.front_default,
        style: action.payload.types[0].type.name,
      };
    default:
      return state;
  }
};
export default searchReducer;
