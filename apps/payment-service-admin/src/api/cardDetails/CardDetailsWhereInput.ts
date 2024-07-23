import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CardDetailsWhereInput = {
  id?: StringFilter;
  cardNumber?: StringNullableFilter;
  expiration?: StringNullableFilter;
  postalCode?: StringNullableFilter;
  cvv?: StringNullableFilter;
  cardholderName?: StringNullableFilter;
};
