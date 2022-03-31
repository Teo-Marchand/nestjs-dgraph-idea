import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateOrganizationArgs } from 'src/args/createOrganization.args';
import { IGraphQLOperation, MGL, QGL } from 'src/decorators/gql.decorator';
import { OrganizationModel } from 'src/models/organization/organization.model';
import { DgraphService } from 'src/services/dgraph.service';

@Resolver()
export class OrganizationResolver {
  constructor(private _dgraphService: DgraphService) {}

  @Query(() => [OrganizationModel])
  async findOrganization(
    @QGL('queryOrganization') payload: IGraphQLOperation,
  ): Promise<any> {
    return this._dgraphService.execute(payload);
  }

  @Mutation(() => OrganizationModel)
  async createOrganization(
    @MGL('createOrganization') payload: IGraphQLOperation,
    @Args() args: CreateOrganizationArgs,
  ): Promise<any> {
    console.log(payload);
    return this._dgraphService.execute(payload);
    return {
      id: 'test',
      name: 'test',
    };
  }
}
