const typeDefs = `
  type Post {
    userId: ID!
    id: ID!
    title: String!
    body: String!
  }

  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
    userId: ID!
    userPosts: [Post]
  }

  type Query {
    getPosts: [Post]
    getTodos: [Todo]
    getTodo(id: ID!): Todo
    getPostsByUser(UserId: ID!): [Post]
  }
`;

export default typeDefs;




