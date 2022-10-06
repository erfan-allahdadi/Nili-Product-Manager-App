import { createStore ,applyMiddleware , compose } from "redux";

// root reducer
import { rootReducer } from "./Reducers/rootReducer";

// redux-dev-tools
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk"

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))