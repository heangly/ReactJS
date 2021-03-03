import dotenv from 'dotenv';
import colors from 'colors';
import Post from './models/postModel.js';
import User from './models/userModel.js';
import { posts, users } from './data/posts.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Post.deleteMany();
    await User.deleteMany();
    // now import new data
    await Post.insertMany(posts);
    await User.insertMany(users);
    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // clear all data first before import new data

    await Post.deleteMany();
    await User.deleteMany();
    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
