import React, { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
import { ButtonForm, Header, Input } from './Form.styled';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
class Form extends Component {
  state = {
    q: '',
  };

  inputHandler = e => {
    this.setState({
      q: e.target.value.trim(),
    });
  };
  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.q === '') {
      return toast.error('Search query is empty');
    }
    this.props.onSubmit(this.state.q);
  };
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
            <ButtonForm>
              <FiSearch size={`24px`} vertical-align={`middle`} />
            </ButtonForm>
          </form>
        </div>
      </Header>
    );
  }
}
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
