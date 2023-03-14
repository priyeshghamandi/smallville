import { combineReducers, configureStore } from '@reduxjs/toolkit'
import auth from './auth/auth.slice'
import session from './session/session.slice'
import navigation from './navigation/navigation.slice'
import studentCategory from './student-category/student-category.slice'

const rootReducer = combineReducers({
    auth,
    session,
    navigation,
    studentCategory
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch

export default store;