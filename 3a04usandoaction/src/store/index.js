import { createStore, combineReducers } from "redux";

// importando o reducer
import userReducer from "./modules/user/reducer";

// combinando os reducers da aplicação, nesse exemplo temos apenas um
const reducers = combineReducers({ newName: userReducer });

// passando os reducers combinados para a store
const store = createStore(reducers);

export default store;