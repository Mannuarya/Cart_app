import React from "react";

class Additem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }

  render() {
    return (
      <form
        className="row mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.additem(this.state.productName, this.state.productPrice); // Use additem as in parent component
        }}
      >
        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="Inputname"
            aria-describedby="name"
            name="productName"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: e.currentTarget.value });
            }}
            value={this.state.productPrice}
          />
        </div>
        <button type="submit" className="btn btn-primary col-4">
          Add-Item
        </button>
      </form>
    );
  }
}

export default Additem;
