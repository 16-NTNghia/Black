import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './home/HomePage';
import BlogIndex from './Blogs/BlogIndex';
import AboutMe from './home/AboutMe';
import Blog1 from './Blogs/Blog1';
import BlogOutlet from './Blogs/BlogOutlet';
import Blog9 from './Blogs/Blog9';
import Blog2 from './Blogs/Blog2';
import Blog3 from './Blogs/Blog3';
import Blog5 from './Blogs/Blog5';
import Blog6 from './Blogs/Blog6';
import Blog7 from './Blogs/Blog7';
import Blog8 from './Blogs/Blog8';
import Blog4 from './Blogs/Blog4';

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomePage/>
  },
  {
    path: "/about",
    element:<AboutMe/>
  },
  {
    path: "blogs/",
    element: <BlogOutlet />,
    children:[
      {
        path:'',
        element: <BlogIndex />
      },
      {
        path:'1',
        element: <Blog1 />
      },
      {
        path:'2',
        element: <Blog2 />
      },
      {
        path:'3',
        element: <Blog3 />
      },
      {
        path:'4',
        element: <Blog4 />
      },
      {
        path:'5',
        element: <Blog5 />
      },
      {
        path:'6',
        element: <Blog6 />
      },
      {
        path:'7',
        element: <Blog7 />
      },
      {
        path:'8',
        element: <Blog8 />
      },
      {
        path:'9',
        element: <Blog9 />
      },
    ]
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
