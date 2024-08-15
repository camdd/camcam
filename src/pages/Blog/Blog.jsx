import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../layouts/Layout';
import { GroupBoxDemo } from '../../components/GroupBox/GroupBox';
import './Blog.css'
import Pagination from '@mui/material/Pagination';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    axios.get('http://localhost:8080/api/blog')
      .then(res => {
        console.log('API Response:', res.data);
        if (Array.isArray(res.data)) {
          setPosts(res.data);
        } else {
          console.error('Expected an array but got:', res.data);
        }
      })
      .catch(err => console.log('Error fetching posts: ' + err));
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <h1>Posts</h1>
      {currentPosts.map(post => (
        <GroupBoxDemo key={post._id} label={post.title}>
          <p>{post.content}</p>
          <p><strong>Date:</strong> {formatDate(post.date)}</p>
        </GroupBoxDemo>
      ))}
      <Pagination
        className='pagination'
        count={Math.ceil(posts.length / postsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        shape="rounded"
      />
    </Layout>
  );
}

const formatDate = (dateString) => {
  if (!dateString) return 'Date not available';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Invalid date';
  return date.toLocaleDateString('es-ES');
};

