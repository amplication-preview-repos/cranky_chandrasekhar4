import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CardDetailsService } from "./cardDetails.service";
import { CardDetailsControllerBase } from "./base/cardDetails.controller.base";

@swagger.ApiTags("cardDetails")
@common.Controller("cardDetails")
export class CardDetailsController extends CardDetailsControllerBase {
  constructor(protected readonly service: CardDetailsService) {
    super(service);
  }
}
