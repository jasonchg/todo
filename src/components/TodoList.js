import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  state = {
    totalAmount: null
  };

  // Get Total Amount Spent //
  static getDerivedStateFromProps(props, state) {
    const { items } = props;

    const total = items.reduce((total, item) => {
      return total + parseFloat(item.money);
    }, 0);

    return { totalAmount: total };
  }

  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    const { totalAmount } = this.state;

    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize ">Walao..what had you spent again...</h3>
        <h3
          className={
            totalAmount === 0
              ? "text-capitalize  text-success"
              : "text-capitalize  text-danger"
          }
        >
          {" "}
          RM {parseFloat(totalAmount).toFixed(2)}
        </h3>

        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              money={item.money}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
        >
          Clear list
        </button>
      </ul>
    );
  }
}

export default TodoList;
