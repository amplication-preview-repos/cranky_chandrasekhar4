import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CardDetailsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CardDetailsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="cardNumber" source="cardNumber" />
        <TextField label="expiration" source="expiration" />
        <TextField label="postalCode" source="postalCode" />
        <TextField label="cvv" source="cvv" />
        <TextField label="cardholderName" source="cardholderName" />
      </Datagrid>
    </List>
  );
};
