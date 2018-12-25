import React, { Component } from "react";
// import uuid from "uuid";

class TodoInput extends Component {
  render() {
    const {
      item,
      money,
      handleChangeItem,
      handleChangeMoney,
      handleSubmit,
      editItem
    } = this.props;

    return (
      <div>
        <div className="card card-body my-3">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text bg-primary text-white">
                  <i className="fas fa-book" />
                </div>
              </div>
              <input
                type="text"
                className="form-control text-capitalize mr-2"
                placeholder="Item Name"
                value={item}
                onChange={handleChangeItem}
                required
              />

              <div className="input-group-prepend">
                <div className="input-group-text bg-primary text-white">
                  <i className="fa fa-money-bill-alt" />
                </div>
              </div>
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="How Much"
                value={money}
                onChange={handleChangeMoney}
                required
              />
            </div>

            <button
              type="submit"
              className={
                editItem
                  ? "btn btn-success btn-block mt-3"
                  : "btn btn-primary btn-block mt-3 "
              }
            >
              {editItem ? "Edit Item" : "Add Item"}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoInput;
