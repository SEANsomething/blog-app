import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/home';
import PostList from '../pages/home/posts';
import PostDetail from '../pages/home/posts/detail';

export default function Router() {
  return <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/posts" element={<PostList />}/>
      <Route path="/posts/:id" element={<PostDetail />}/>
      <Route path="/posts/new" element={<h1>Post New Page</h1>}/>
      <Route path="/posts/edit/:id" element={<h1>Post Edit Page</h1>}/>
      <Route path="/profile" element={<h1>Profile Page</h1>}/>
      <Route path="*" element={<Navigate replace to="/" />}/>
    </Routes>
  </>;
}