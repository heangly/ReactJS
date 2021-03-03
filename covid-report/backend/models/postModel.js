import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  // add relationship between product and user
  user: {
    type: String,
    required: true
  },

  location: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  contracted: {
    type: Boolean,
    required: true
  }
});

const Post = mongoose.model('Post', postSchema);
export default Post;
