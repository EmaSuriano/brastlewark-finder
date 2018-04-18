import { microGraphiql, microGraphql } from 'apollo-server-micro';
import cors from 'micro-cors';
import micro, { send } from 'micro';
import { get, post, router } from 'microrouter';
import schema from './schema';

const graphqlHandler = microGraphql({ schema });
const graphiqlHandler = microGraphiql({ endpointURL: '/graphql' });
const SERVER_PORT = '3001';

const corsUpdater = cors();

const server = micro(corsUpdater(router(
  get('/graphql', graphqlHandler),
  post('/graphql', graphqlHandler),
  get('/graphiql', graphiqlHandler),
  (req, res) => send(res, 404, 'not found'),
)));

server.listen(3001, () => {
  console.log(`Go to http://localhost:${3001}/graphiql to run queries!`);
});
