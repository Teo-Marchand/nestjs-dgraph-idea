import { ObjectType, Field } from '@nestjs/graphql';
import { OrganizationMemberModel } from './organizationMember.model';

@ObjectType()
export class OrganizationModel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => [OrganizationMemberModel])
  members: OrganizationMemberModel[];
}
