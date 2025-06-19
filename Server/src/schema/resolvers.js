import Post from '../config/connection/Post.js';


const resolver = {
  Query: {
    posts: async () => {
      return await Post.find();
    },
  },
  Mutation: {
    addPost: async (_, { title, body, userId }) => {
      const newPost = new Post({ title, body, userId });
      await newPost.save();
      return newPost;
    },
  },
};

export default resolver;
 

