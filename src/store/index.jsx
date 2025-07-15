import { createStore, applyMiddleware } from '@reduxjs/toolkit'

import rootReducer from '../redux'

const store = createStore(rootReducer, {})

export default store
