import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import {persistStore, persistCombineReducers} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import * as appReducer from './src/reducer'

const config = {
  key: 'root',
  storage,
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
