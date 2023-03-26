import { configureStore, combineReducers, Action } from '@reduxjs/toolkit'
import { useSelector as useReduxSelector, TypedUseSelectorHook, useDispatch as useReduxDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import user from './userSlice'
import common from './commonSlice'

const reducers = {
  user,
  common,
}

const rootReducer = combineReducers(reducers)
// 中间件集合
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
})
// 最原始的dispatch
export type AppDispatch = typeof store.dispatch
export type AppGetState = typeof store.getState
export type RootState = ReturnType<typeof rootReducer>

// 给useSelector加上rootState的默认type
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
// It is important to use Action as last type argument, does not work with any.
type AppThunkDispatch = ThunkDispatch<RootState, undefined, Action>
// 给dispatch加上type
export const useDispatch = (): AppThunkDispatch => useReduxDispatch<AppThunkDispatch>()
export default store
