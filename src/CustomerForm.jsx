import React, { Component } from "react";

// Component to manage a Customer Form
class CustomerForm extends Component {
  state = {
    id: 0,
    name: "",
    gender: "U",
    birthdate: new Date()
  };

  handleChange = event => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const id = new Date().getTime();
    const name = this.state.name;
    const gender = this.state.gender;
    const birthDate = this.state.birthDate;
    this.setState({ id, name, gender, birthDate });
    const customer = { id, name, gender, birthDate };
    this.props.onCustomerAdd(customer);
  };

  onCustomerAdd = customer => {};

  onCustomerUpdate = customer => {
    this.setState({
      id: customer.id,
      name: customer.name,
      gender: customer.gender,
      birthDate: customer.birthDate
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <hr />
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Ajouter une personne"
          onChange={this.handleChange}
        />
        <br />
        <label>Gender</label>
        <select
          name="gender"
          value={this.state.gender}
          onChange={this.handleChange}
        >
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="U">Unknown</option>
        </select>
        <br />
        <label>Birthdate</label>
        <input
          name="birthDate"
          type="date"
          value={this.state.birthDate}
          onChange={this.handleChange}
        />
        <hr />
        <button>Validate</button>
      </form>
    );
  }
}

export default CustomerForm;
