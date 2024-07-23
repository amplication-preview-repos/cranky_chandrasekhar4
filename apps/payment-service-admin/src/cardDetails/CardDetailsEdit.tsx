import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CardDetailsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="cardNumber" source="cardNumber" />
        <TextInput label="expiration" source="expiration" />
        <TextInput label="postalCode" source="postalCode" />
        <TextInput label="cvv" source="cvv" />
        <TextInput label="cardholderName" source="cardholderName" />
      </SimpleForm>
    </Edit>
  );
};
