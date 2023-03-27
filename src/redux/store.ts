import { combineReducers, configureStore } from '@reduxjs/toolkit'
import auth from './auth/auth.slice'
import session from './session/session.slice'
import navigation from './navigation/navigation.slice'
import studentCategory from './student-category/student-category.slice'
import branch from './branch/branch.slice'
import student from './student/student.slice'

const rootReducer = combineReducers({
    auth,
    session,
    navigation,
    studentCategory,
    branch,
    student,
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch

export default store;