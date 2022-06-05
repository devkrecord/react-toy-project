import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/*
    $ yarn add react-router-dom 설치
    createBrowserRouter는 react router v6.4부터 사용할 수 있다.
*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <p>Home</p>,
    errorElement: <p>Not Found😅</p>,
  },
  {
    path: '/videos',
    element: <p>Videos</p>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
