import { ObjectType, Field } from '@nestjs/graphql';
import { LoggerGroupModel } from './loggerGroup.model';

@ObjectType()
export class LoggerModel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => LoggerGroupModel)
  group?: LoggerGroupModel;
}
