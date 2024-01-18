// Import necessary functions and libraries from Redux
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

// Import the authentication reducer
import { reducer as authReducer } from "./Authentication/reducer";

// Import the product reducer
import { reducer as productReducer } from "./Products/reducer";

// Import the 'redux-thunk' middleware for handling asynchronous actions
import thunk from "redux-thunk";

// Combine the authentication and product reducers into a root reducer
const rootReducer = combineReducers({
    authReducer,
    productReducer
});

// Create the Redux store using the legacy 'createStore' function
// Apply 'redux-thunk' middleware to handle asynchronous actions
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
