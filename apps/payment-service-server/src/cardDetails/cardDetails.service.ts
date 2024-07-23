import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CardDetailsServiceBase } from "./base/cardDetails.service.base";

@Injectable()
export class CardDetailsService extends CardDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
