import { CardDetails as TCardDetails } from "../api/cardDetails/CardDetails";

export const CARDDETAILS_TITLE_FIELD = "cardholderName";

export const CardDetailsTitle = (record: TCardDetails): string => {
  return record.cardholderName?.toString() || String(record.id);
};
