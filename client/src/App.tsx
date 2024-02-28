import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import Root from './components/Root';
import { useAppDispatch } from './hooks/useReduxHook';
import { checkTokenThunk } from './redux/thunkActions/authThunkActions';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useState(() => {
    void dispatch(checkTokenThunk());
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [{ path: '/', element: <MainPage /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
