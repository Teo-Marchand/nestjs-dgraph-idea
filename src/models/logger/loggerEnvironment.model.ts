import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LoggerEnvironmentModel {
  @Field()
  id: string;

  @Field()
  name: string;
}
