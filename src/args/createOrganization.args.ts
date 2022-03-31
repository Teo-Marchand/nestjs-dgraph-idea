import { Field, ArgsType } from '@nestjs/graphql';
import { IsEnum, IsString } from 'class-validator';

// enum Role {
//   OWNER,
//   ADMIN,
//   MEMBER,
// }

@ArgsType()
export class CreateOrganizationArgs {
  @IsString()
  @Field()
  name: string;

  // @IsString()
  // @Field()
  // email: string;

  // @IsEnum(Role, { each: true })
  // @Field(() => Role)
  // role: Role;

  @IsString()
  @Field()
  createdAt: string;

  @IsString()
  @Field()
  updatedAt: string;
}
