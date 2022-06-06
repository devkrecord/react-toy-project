import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import Root from './pages/Root';
import VideoDetail from './pages/VideoDetail';

/*
    $ yarn add react-router-dom 설치
    createBrowserRouter는 react router v6.4부터 사용할 수 있다.
*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/videos',
        element: <Videos />,
      },
      {
        path: '/videos/:videoId',
        element: <VideoDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
