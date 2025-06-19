
export default `
  type Post {
    id: ID!
    title: String!
    body: String!
    userId: Int!
  }

  type Query {
    posts: [Post]
  }

  type Mutation {
    addPost(title: String!, body: String!, userId: Int!): Post
  }
`;
