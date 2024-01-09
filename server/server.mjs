import express from 'express';
import colors from 'colors'; // Ignore no use, it does get used
import cors from'cors';
import http from 'http';
import dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

import resolvers from './schema/resolvers/index.js';
import typeDefs from './schema/typeDefs/index.js';

import connectDB from './config/db.js';

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await connectDB();
await server.start();

app.use(
    '/graphql',
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    }),
    express.json({ limit: '50mb' }),
    expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.authorization }),
    }),
);

await new Promise((resolve) => httpServer.listen({ port }, resolve));
console.log(`Server ready at http://localhost:${ port }/graphql`.magenta);