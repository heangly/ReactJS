import React from 'react';
import { AppContext } from '../context/context';
import SinglePost from './SinglePost';

const Posts = () => {
  const { posts } = React.useContext(AppContext);

  return (
    <div className='post'>
      {posts.map((post) => (
        <SinglePost key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Posts;
