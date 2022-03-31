import { registerAs } from '@nestjs/config';

export default registerAs('application', () => ({
  logger: process.env.APPLICATION_LOGGER_LEVEL?.split(',') || ['log'],
  config: {
    graphql: {
      debug: Boolean(process.env.APPLICATION_GRAPHQL_DEBUG),
      playground: Boolean(process.env.APPLICATION_GRAPHQL_PLAYGROUND),
      introspection: Boolean(process.env.APPLICATION_GRAPHQL_INTROSPECTION),
    },
    cors: {
      origin: process.env.APPLICATION_CORS_ORIGIN?.split(',') || ['*'],
      methods: process.env.APPLICATION_CORS_METHODS?.split(',') || [
        'GET',
        'POST',
        'OPTIONS',
      ],
    },
  },
}));
