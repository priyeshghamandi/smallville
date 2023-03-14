import { Suspense, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from "./redux/hooks";
import { deleteSession, setSession } from "./redux/session/session.slice";
import Router from "./router";
import { auth } from "./services/auth.service";
import {authSlice} from './redux/auth/auth.slice';
import PageLoader from "./components/page-loader/PageLoader";
import 'antd/dist/reset.css';


function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        auth()
            .then((user) => {
                dispatch(setSession());
                dispatch(authSlice.actions.authUser(user));
            })
            .catch(() => dispatch(deleteSession()));

    }, [dispatch]);

    return (
      <Suspense fallback={<PageLoader />}>
          <ToastContainer />
          <Router />
      </Suspense>
    );
}

export default App;
