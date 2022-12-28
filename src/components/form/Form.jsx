import React, { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
class Form extends Component {
  render() {
    return (
      <header>
        <form>
          {' '}
          <input type="text" />
          <button>
            <FiSearch />
          </button>
        </form>
      </header>
    );
  }
}

export default Form;
