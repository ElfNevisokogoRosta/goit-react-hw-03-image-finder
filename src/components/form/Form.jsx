import React, { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Button, Header, Input } from './Form.styled';
class Form extends Component {
  constructor() {
    super();
    this.inputHandler = this.inputHandler.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      q: '',
    };
  }
  inputHandler(e) {
    this.setState({
      q: e.target.value.trim(),
    });
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.q);
  }
  render() {
    return (
      <Header>
        <div className="container container-header">
          <form onSubmit={this.onFormSubmit}>
            <Input
              value={this.state.q}
              onChange={this.inputHandler}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <Button>
              <FiSearch size={`24px`} vertical-align={`middle`} />
            </Button>
          </form>
        </div>
      </Header>
    );
  }
}

export default Form;
