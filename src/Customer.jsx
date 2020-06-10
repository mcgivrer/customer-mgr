import React from "react";

// Functional Component:
// destrcuturation de customer, onDelete, onUpdate
// from this.props directly as function parameters
const Customer = ({ customer, onDelete, onUpdate }) => (
  <tr>
    <td id={customer.id}>{customer.id}</td>
    <td>{customer.name}</td>
    <td>{customer.gender}</td>
    <td>
      {customer.birthDate.getUTCDate() + 1}/
      {customer.birthDate.getUTCMonth() + 1}/
      {customer.birthDate.getUTCFullYear()}
    </td>
    <td>
      <button onClick={() => onDelete(customer.id)}>delete</button>
    </td>

    <td>
      <button onClick={() => onUpdate(customer.id)}>modify</button>
    </td>
  </tr>
);

export default Customer;
