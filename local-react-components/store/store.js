/**
 * Create Store
 */

 /**
  * Externals
  */
 import { createStore, applyMiddleware } from 'redux'
 import { composeWithDevTools } from 'redux-devtools-extension'
 
 /**
  * Internals
  */
 import initialState from './initialState';
 import reducer from './reducer';
 
 const initializeStore = (preloadedState = initialState) => {
   return createStore(
     reducer,
     preloadedState,
     composeWithDevTools(applyMiddleware())
   )
 }

 export default initializeStore;