const initState = {};
export default (state = initState, action) => {
  console.log(`%c redux====`, "color: green");
  switch (action.type) {
    case "ADD_TODO":
      console.log(
        `%c ADD_TODO====${JSON.stringify(action.data)}`,
        "color: deeppink"
      );
      return Object.assign({}, state, action.data);
    case "SELECTCATELOGE":
      console.log(
        `%c SELECTCATELOGE====${JSON.stringify(action.data)}`,
        "color: forestgreen"
      );
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};