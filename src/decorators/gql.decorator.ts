/* eslint-disable prettier/prettier */
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { gql } from 'graphql-request';
import { GqlExecutionContext } from '@nestjs/graphql';

export interface IGraphQLOperation {
  operation: string;
  field: string;
}

export const QGL = createParamDecorator(
  (fieldName: string, context: ExecutionContext): IGraphQLOperation => {
    const ctx = GqlExecutionContext.create(context);
    const query = ctx.getContext().req.body.query;
    const result = query.replace(context.getHandler().name, fieldName);
    return { operation: gql`query MyQuery ${result}`, field: fieldName };
  },
);

export const MGL = createParamDecorator(
  (fieldName: string, context: ExecutionContext): IGraphQLOperation => {
    const ctx = GqlExecutionContext.create(context);
    const query = ctx.getContext().req.body.query;
    console.log(query);
    const result = query.replace(context.getHandler().name, fieldName);
    const result2 = result.replace('(', '(input:{');
    const result3 = result2.replace(')', '})');
    return { operation: gql`${result3}`, field: fieldName };
  },
);
