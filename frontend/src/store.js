import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// to use redux devtools
import { composeWithDevTools } from 'redux-devtools-extension';


const reducer = combineReducers({

});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)
  )
);

// @ video 3 Product list rdeucer and action

export default store;