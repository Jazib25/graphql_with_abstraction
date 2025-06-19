import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import  connectDB from "./src/config/connection/db.js";




import typedef from './src/schema/typeDef.js';
import resolver from './src/schema/resolvers.js';


const app = express();


async function startServer() {
 await connectDB();

  const server = new ApolloServer({ typeDefs: typedef, resolvers: resolver });
  await server.start();

  app.use('/graphql', cors(), express.json(), expressMiddleware(server));

  app.listen({ port: 8080 }, () =>
    console.log(` Server ready at http://localhost:8080/graphql`)
  );
}


startServer();
