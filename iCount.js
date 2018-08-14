const { createStore } = require('redux');

const initialState = {
  sheepNumber : 10
};

const myReducer = (state = initialState, action) => {
  const newState = {...state};

  if(action.type === 'Count') {
    newState.sheepNumber += action.val;
  };

  if(action.type === 'Eaten by Wolf') {
    newState.sheepNumber -= action.val;
  };

  return newState;
}

const store = createStore(myReducer);

store.subscribe(() => {
  console.log('After count', store.getState());
  console.log('After eaten by wolf', store.getState());
  console.log('After undeclared type', store.getState());
});

store.dispatch({type:'Count', val:3});
store.dispatch({type:'Eaten by Wolf', val:1});
store.dispatch({type:'Redux doesn\'t know this ditty', val:0});
