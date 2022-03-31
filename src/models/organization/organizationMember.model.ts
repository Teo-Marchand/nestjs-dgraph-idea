import { ObjectType, Field } from '@nestjs/graphql';
import { OrganizationModel } from './organization.model';

enum Role {
  NOTHING = 'NOTHING',
  REDIRECTION_INTERNAL = 'REDIRECTION_INTERNAL',
  REDIRECTION_EXTERNAL = 'REDIRECTION_EXTERNAL',
}

@ObjectType()
export class OrganizationMemberModel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  role: Role;

  @Field(() => OrganizationModel)
  organization: OrganizationModel;

  @Field(() => [OrganizationMemberModel])
  members: OrganizationMemberModel[];
}
