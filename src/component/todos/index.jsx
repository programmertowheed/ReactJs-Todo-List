import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import shortid from "shortid";
import Controller from "../controllers";
import CreateTodoForm from "../create-todo-form";
import ListView from "../listview";
import TableView from "../tableview";

class Todos extends Component {
  state = {
    todos: [
      {
        id: "id1",
        text: "First todo",
        description: "First todo description",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "id2",
        text: "Second todo",
        description: "Second todo description",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
    isOpenTodoForm: false,
    searchTerm: "",
    view: "list",
    filterSelect: "all",
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isSelect = !todo.isSelect;
    this.setState({ todos });
  };

  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isComplete = !todo.isComplete;
    this.setState({ todos });
  };

  toggleForm = () => {
    this.setState({ isOpenTodoForm: !this.state.isOpenTodoForm });
  };

  handleSearch = (term) => {
    this.setState({ searchTerm: term });
  };

  createTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;

    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
  };

  changeView = (event) => {
    this.setState({ view: event.target.value });
  };

  handleFilter = (filterValue) => {
    this.setState({ filterSelect: filterValue });
  };

  clearSelected = () => {
    const todos = this.state.todos.filter((todo) => !todo.isSelect);
    this.setState({ todos });
  };

  clearCompleted = () => {
    const todos = this.state.todos.filter((todo) => !todo.isComplete);
    this.setState({ todos });
  };

  reset = () => {
    this.setState({
      isOpenTodoForm: false,
      searchTerm: "",
      view: "list",
      filterSelect: "all",
    });
  };

  performSearch = () => {
    return this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  performFilter = (todos) => {
    const { filterSelect } = this.state;
    if (filterSelect === "completed") {
      return todos.filter((todo) => todo.isComplete);
    } else if (filterSelect === "running") {
      return todos.filter((todo) => !todo.isComplete);
    } else {
      return todos;
    }
  };

  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);
    return this.state.view === "list" ? (
      <ListView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    ) : (
      <TableView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    );
  };

  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">My Todos</h1>
        <Controller
          term={this.state.searchTerm}
          handleSearch={this.handleSearch}
          toggleForm={this.toggleForm}
          view={this.state.view}
          filterSelect={this.state.filterSelect}
          changeView={this.changeView}
          handleFilter={this.handleFilter}
          clearSelected={this.clearSelected}
          clearCompleted={this.clearCompleted}
          reset={this.reset}
        />
        <div>{this.getView()}</div>
        <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>
            Create New Todo Item
          </ModalHeader>
          <ModalBody>
            <CreateTodoForm createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Todos;
