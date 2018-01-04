import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import {persistStore, autoRehydrate} from 'redux-persist';
import appReducer from './src/reducer'
const enhancer = compose(
  applyMiddleware(
    thunk
  ),
  autoRehydrate()
)

export default function configureStore(onComplete) {
  const store = createStore(
    appReducer,
    enhancer
  )
  // 这个暂时先这么解决吧
  // persistStore(store,{blacklist: ['UserReducer']}, onComplete)
  return store;
}
