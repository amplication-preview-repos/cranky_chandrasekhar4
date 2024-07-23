import { Module } from "@nestjs/common";
import { CardDetailsModuleBase } from "./base/cardDetails.module.base";
import { CardDetailsService } from "./cardDetails.service";
import { CardDetailsController } from "./cardDetails.controller";
import { CardDetailsResolver } from "./cardDetails.resolver";

@Module({
  imports: [CardDetailsModuleBase],
  controllers: [CardDetailsController],
  providers: [CardDetailsService, CardDetailsResolver],
  exports: [CardDetailsService],
})
export class CardDetailsModule {}
