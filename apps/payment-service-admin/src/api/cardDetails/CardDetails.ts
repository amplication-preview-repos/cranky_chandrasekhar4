export type CardDetails = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  cardNumber: string | null;
  expiration: string | null;
  postalCode: string | null;
  cvv: string | null;
  cardholderName: string | null;
};
