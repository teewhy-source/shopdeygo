import { compose, applyMiddleware, legacy_createStore as createStore } from "redux";
import { rootReducer } from "./Rootreducer";
import logger from "redux-logger";

const Middleware = [logger];

// Compose enhancers correctly
const composedEnhancers = compose(applyMiddleware(...Middleware));

// Create the Redux store with the composed enhancers
export const store = createStore(rootReducer, undefined, composedEnhancers);
