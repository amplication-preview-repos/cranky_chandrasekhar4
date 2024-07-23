import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CardDetailsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cardNumber" source="cardNumber" />
        <TextInput label="expiration" source="expiration" />
        <TextInput label="postalCode" source="postalCode" />
        <TextInput label="cvv" source="cvv" />
        <TextInput label="cardholderName" source="cardholderName" />
      </SimpleForm>
    </Create>
  );
};
