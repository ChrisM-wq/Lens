import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import ArticlesPage from './pages/ArticlesPage';
import Profile from './pages/Profile';
import { useSelector } from 'react-redux';
import SignIn from './pages/default/SignIn';
import ExploreTopics from './pages/ExploreTopics';
import SearchResults from './pages/SearchResults';
import TopicPage from './pages/TopicPage';

const RoutesConfig = () => {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        {isAuthenticated && <Route path="write" element={<CreatePost />} /> }
        {isAuthenticated && <Route path="explore-topics" element={<ExploreTopics />} /> }
        <Route path="article/:articleId" element={<ArticlesPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="search" element={<SearchResults />} />
        <Route path="tag/:tag" element={<TopicPage />} />
        {!isAuthenticated && <Route path="/signin" element={<SignIn to="/" />} />}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default RoutesConfig;