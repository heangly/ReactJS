import React from 'react';
import { AppContext } from '../context/context';
import SinglePost from './SinglePost';

const PostContainer = () => {
  const { posts } = React.useContext(AppContext);

  return (
    <div className='post'>
      {posts.map((post) => (
        <SinglePost key={post._id} {...post} id={post._id} />
      ))}
    </div>
  );
};

export default PostContainer;
