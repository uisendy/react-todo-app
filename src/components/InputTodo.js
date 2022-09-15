import React, { Component } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';

export class InputTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    return this.state.title.trim()
      ? (this.props.addTodoItem(this.state.title), this.setState({ title: '' }))
      : alert('Please write item');
  };
  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input
          className="input-text"
          type="text"
          name="title"
          placeholder="Add Todo..."
          onChange={(e) => this.onInputChange(e)}
        />
        <button
          type="submit"
          style={{
            border: 'none',
            outline: 'none',
            background: 'transparent',
          }}
        >
          <FaArrowAltCircleRight
            style={{
              color: 'green',
              fontSize: '16px',
              background: 'transparent',
            }}
          />
        </button>
      </form>
    );
  }
}

export default InputTodo;
