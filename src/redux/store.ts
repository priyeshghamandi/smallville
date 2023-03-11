import { combineReducers, configureStore } from '@reduxjs/toolkit'
import auth from './auth/auth.slice'
import session from './session/session.slice'

const rootReducer = combineReducers({
    auth,
    session,
})

export const store = configureStore({
    reducer: {
        auth,
        session,
    },
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch

export default store;