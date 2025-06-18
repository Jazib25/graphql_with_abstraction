import axios from 'axios';

const resolvers = {
  Todo: {
    userPosts: async (todo) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${todo.userId}`);
      return response.data;
    },
  },

  Query: {
    getPosts: async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return response.data;
    },

    getTodos: async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      return response.data;
    },

    getTodo: async (_, { id }) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
      return response.data;
    },

    getPostsByUser: async (_, { UserId }) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${UserId}`);
      return response.data;
    },
  },
};

export default resolvers;  





