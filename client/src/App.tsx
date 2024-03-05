import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRouter from './components/HOCs/PrivateRouter';
import AddCoursePage from './components/pages/AddCoursePage';
import MainPage from './components/pages/MainPage';
import ProfilePage from './components/pages/ProfilePage';
import Root from './components/Root';
import { useAppDispatch, useAppSelector } from './hooks/useReduxHook';
import { checkTokenThunk } from './redux/thunkActions/authThunkActions';
import TeacherCard from './components/ui/TeacherCard';
import CourseCard from './components/ui/CourseCard';
import CoursesPage from './components/pages/CoursesPage';


function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  useState(() => {
    void dispatch(checkTokenThunk());
  });

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { path: '/', element: <MainPage /> },
        {
          element: <PrivateRouter isAllowed={user.status === 'logged'} />,
          children: [{ path: '/profile', element: <ProfilePage /> }],
        },
        { path: '/add', element: <AddCoursePage /> },
        { path: '/profile1', element: <ProfilePage /> },
        
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
