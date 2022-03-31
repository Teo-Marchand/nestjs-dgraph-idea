import { Module } from '@nestjs/common';
import { ASGraphqlModule } from './modules/graphql/graphql.module';
import { MemberResolver } from './resolvers/member.resolver';
import { OrganizationResolver } from './resolvers/organization.resolver';
import { DgraphService } from './services/dgraph.service';

@Module({
  imports: [ASGraphqlModule],
  controllers: [],
  providers: [MemberResolver, DgraphService, OrganizationResolver],
})
export class AppModule {}
