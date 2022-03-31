import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LoggerGroupModel {
  @Field()
  id: string;

  @Field()
  name: string;
}
