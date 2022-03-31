import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
@Module({
  imports: [
    GraphQLModule.forRootAsync({
      imports: [ConfigModule.forRoot({ cache: true })],
      useFactory: async (configService: ConfigService) => ({
        autoSchemaFile: 'schema.gql',
        debug: configService.get('application.graphql.debug'),
        playground: configService.get('application.graphql.playground'),
        introspection: configService.get('application.graphql.introspection'),
        context: ({ req }) => ({ req }),
        installSubscriptionHandlers: true,
        subscriptions: {
          'subscriptions-transport-ws': {
            path: '/graphql',
            onConnect: () => {
              console.log('connected');
            },
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class ASGraphqlModule {}
