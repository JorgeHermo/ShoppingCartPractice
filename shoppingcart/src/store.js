import { configureStore, combineReducers, applyMiddle } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const reducer = combineReducers({

})

const initialState = {}

const middleware = [thunk]

const store = configureStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddle(...middleware))
)

export default store