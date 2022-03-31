import { Args, Query, Resolver } from '@nestjs/graphql';
import { CreateOrganizationArgs } from 'src/args/createOrganization.args';
import { IGraphQLOperation, QGL } from 'src/decorators/gql.decorator';
import { OrganizationMemberModel } from 'src/models/organization/organizationMember.model';
import { DgraphService } from 'src/services/dgraph.service';

@Resolver()
export class MemberResolver {
  constructor(private _dgraphService: DgraphService) {}

  @Query(() => [OrganizationMemberModel])
  async findUser(
    @QGL('queryMember') gqlRequest: IGraphQLOperation,
    @Args() payload: CreateOrganizationArgs,
  ): Promise<any> {
    console.log(payload);
    return this._dgraphService.execute(gqlRequest);
  }
}
