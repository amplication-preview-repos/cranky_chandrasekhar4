import { CardDetailsWhereInput } from "./CardDetailsWhereInput";
import { CardDetailsOrderByInput } from "./CardDetailsOrderByInput";

export type CardDetailsFindManyArgs = {
  where?: CardDetailsWhereInput;
  orderBy?: Array<CardDetailsOrderByInput>;
  skip?: number;
  take?: number;
};
