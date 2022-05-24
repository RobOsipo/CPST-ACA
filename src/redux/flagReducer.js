import { createStore } from "redux";

// * Redux state is only a flag I can use to re-render my components easily in a preformant way
let initState = {
  flag: false,
};

const businessReducer = (state = initState, action) => {
  switch (action.type) {
    case "FLIPFLAG":
      return {
        flag: !state.flag,
      };
    default:
      return state;
  }
};

const store = createStore(businessReducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
