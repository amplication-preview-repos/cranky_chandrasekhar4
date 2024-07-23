import { SortOrder } from "../../util/SortOrder";

export type CardDetailsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  cardNumber?: SortOrder;
  expiration?: SortOrder;
  postalCode?: SortOrder;
  cvv?: SortOrder;
  cardholderName?: SortOrder;
};
