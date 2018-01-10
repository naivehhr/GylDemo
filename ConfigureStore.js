import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import appReducer from './src/reducer'
const config = {
  key: 'root',
  storage,
  blacklist: ['nav', 'loading']
}
const reducer = persistCombineReducers(config, appReducer)
const enhancer = compose(
  applyMiddleware(
    thunk
  )
)

export function configureStore(onComplete) {
  let store = createStore(
    reducer,
    enhancer
  )
  let persistor = persistStore(store)
  return { persistor, store }
}
