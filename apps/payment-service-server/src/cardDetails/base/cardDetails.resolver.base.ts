/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CardDetails } from "./CardDetails";
import { CardDetailsCountArgs } from "./CardDetailsCountArgs";
import { CardDetailsFindManyArgs } from "./CardDetailsFindManyArgs";
import { CardDetailsFindUniqueArgs } from "./CardDetailsFindUniqueArgs";
import { CreateCardDetailsArgs } from "./CreateCardDetailsArgs";
import { UpdateCardDetailsArgs } from "./UpdateCardDetailsArgs";
import { DeleteCardDetailsArgs } from "./DeleteCardDetailsArgs";
import { CardDetailsService } from "../cardDetails.service";
@graphql.Resolver(() => CardDetails)
export class CardDetailsResolverBase {
  constructor(protected readonly service: CardDetailsService) {}

  async _cardDetailsItemsMeta(
    @graphql.Args() args: CardDetailsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CardDetails])
  async cardDetailsItems(
    @graphql.Args() args: CardDetailsFindManyArgs
  ): Promise<CardDetails[]> {
    return this.service.cardDetailsItems(args);
  }

  @graphql.Query(() => CardDetails, { nullable: true })
  async cardDetails(
    @graphql.Args() args: CardDetailsFindUniqueArgs
  ): Promise<CardDetails | null> {
    const result = await this.service.cardDetails(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CardDetails)
  async createCardDetails(
    @graphql.Args() args: CreateCardDetailsArgs
  ): Promise<CardDetails> {
    return await this.service.createCardDetails({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CardDetails)
  async updateCardDetails(
    @graphql.Args() args: UpdateCardDetailsArgs
  ): Promise<CardDetails | null> {
    try {
      return await this.service.updateCardDetails({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CardDetails)
  async deleteCardDetails(
    @graphql.Args() args: DeleteCardDetailsArgs
  ): Promise<CardDetails | null> {
    try {
      return await this.service.deleteCardDetails(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
