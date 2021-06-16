import React, { Component } from "react";
import {Form, FormGroup,Label,Input,Button } from 'reactstrap';
import PropTypes from "prop-types";


class CreateTodoForm extends Component {
    state = { 
        text: '',
        description: ''
    }

    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event =>{
        event.preventDefault()
        this.props.createTodo(this.state)
        event.target.reset()
        this.setState({ text:'', description: '' })
    }


    render() { 
        return (
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label>Enter Task</Label>
              <Input
                placeholder="Do something"
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Task Description</Label>
              <Input
                type="textarea"
                placeholder="Enter some description about your task"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button type="submit">Create Task</Button>
          </Form>
        );
    }
}

CreateTodoForm.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default CreateTodoForm;
