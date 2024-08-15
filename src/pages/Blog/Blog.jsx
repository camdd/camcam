import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../layouts/Layout';
import { GroupBoxDemo } from '../../components/GroupBox/GroupBox';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/blog')
      .then(res => setPosts(res.data))
      .catch(err => console.log('Error fetching posts: ' + err));
  }, []);

  return (
    <Layout> 
      <h1>Posts</h1>
      {posts.map(post => (
        <GroupBoxDemo key={post._id} label={post.title}>
          <p>{post.content}</p>
          <p><strong>Date</strong> {post.author}</p>
        </GroupBoxDemo>
      ))}
    </Layout>
  );
}
