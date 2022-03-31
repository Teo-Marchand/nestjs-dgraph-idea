import { Injectable } from '@nestjs/common';
import { request } from 'graphql-request';
import { IGraphQLOperation } from 'src/decorators/gql.decorator';

@Injectable()
export class DgraphService {
  async execute(payload: IGraphQLOperation): Promise<any> {
    return (await request('http://localhost:8080/graphql', payload.operation))[
      payload.field
    ];
  }
}
