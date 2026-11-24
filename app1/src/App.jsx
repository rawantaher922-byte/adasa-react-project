import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import postsData from './data/posts.json';
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import Blog from './Component/Blog/Blog';
import Details from './Component/Details/Details';
import NotFound from './Component/NotFound/NotFound';
import About from './Component/About/About';

export default function App() {
  const [posts, setPosts] = useState(postsData.posts);
  const router = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home posts={posts} />, },
        { path: 'blog', element: <Blog posts={posts} />, },
        { path: 'blog/:id', element: <Details posts={posts} />, },
        { path: 'details/:id', element: <Details posts={posts} />, },
        { path: 'details', element: <Blog posts={posts} />, },
        { path: 'about', element: <About />, },
        { path: '*', element: <NotFound />, },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
