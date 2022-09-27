import { createStore } from "redux";

// root reducer
import { rootReducer } from "./Reducers/rootReducer";

// redux-dev-tools
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(rootReducer,composeWithDevTools())