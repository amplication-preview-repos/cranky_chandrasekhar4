import * as graphql from "@nestjs/graphql";
import { CardDetailsResolverBase } from "./base/cardDetails.resolver.base";
import { CardDetails } from "./base/CardDetails";
import { CardDetailsService } from "./cardDetails.service";

@graphql.Resolver(() => CardDetails)
export class CardDetailsResolver extends CardDetailsResolverBase {
  constructor(protected readonly service: CardDetailsService) {
    super(service);
  }
}
