import React from "react";
import ReactDOM from "react-dom";

import Customer from "./Customer";
import CustomerForm from "./CustomerForm";

// Our Customer Manager app
class App extends React.Component {
  state = {
    title: "Customers",
    customers: [
      {
        id: 1,
        name: "Nathalie Delorme",
        gender: "F",
        birthDate: new Date("11/14/1980")
      },
      {
        id: 2,
        name: "Solène Delorme",
        gender: "F",
        birthDate: new Date("10/28/2010")
      },
      {
        id: 3,
        name: "Mathys Delorme",
        gender: "M",
        birthDate: new Date("08/02/2007")
      },
      {
        id: 4,
        name: "Frédéric Delorme",
        gender: "M",
        birthDate: new Date("02/02/1973")
      }
    ]
  };

  handleDeleteCustomer = id => {
    const customers = [...this.state.customers];
    const index = customers.findIndex(function(customer) {
      return customer.id === id;
    });
    customers.splice(index, 1);
    this.setState({ customers });
  };

  handleAddCustomer = customer => {
    const customers = [...this.state.customers];
    customers.push(customer);
    this.setState({ customers });
  };

  handleUpdateCustomer = id => {
    const customers = [...this.state.customers];
    const index = customers.findIndex(function(customer) {
      return customer.id === id;
    });
    return customers[index];
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>Name</td>
              <td>Gender</td>
              <td>Birthdate</td>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map(customer => (
              <Customer
                customer={customer}
                onDelete={this.handleDeleteCustomer}
                onUpdate={this.handleUpdateCustomer}
              />
            ))}
          </tbody>
        </table>
        <CustomerForm onCustomerAdd={this.handleAddCustomer} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
