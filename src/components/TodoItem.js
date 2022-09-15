import React, { Component } from 'react';
import styles from './TodoItem.module.css';
import { FaTrash } from 'react-icons/fa';

export class TodoItem extends Component {
  state = {
    editing: false,
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleEditComplete = (e) => {
    return e.key === 'Enter' ? this.setState({ editing: false }) : null;
  };

  componentWillUnmount() {
    console.log('Cleaning up...');
  }
  render() {
    const { completed, id, title } = this.props.todo;
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEdit} style={viewMode}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={completed}
            onChange={() => this.props.handleChange(id)}
          />{' '}
          <span style={completed ? completedStyle : null}> {title}</span>
          <button onClick={() => this.props.handleDelete(id)}>
            <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
          </button>
        </div>
        <input
          type="text"
          style={editMode}
          value={title}
          className={styles.textInput}
          onChange={(e) => {
            this.props.setUpdate(e.target.value, id);
          }}
          onKeyDown={(e) => this.handleEditComplete(e)}
        />
      </li>
    );
  }
}

export default TodoItem;
