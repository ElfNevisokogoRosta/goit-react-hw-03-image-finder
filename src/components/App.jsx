import Form from './form/Form';
import Gallery from './gallery/Gallery';
import Modal from './modal/Modal';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      q: '',
    };
    this.submitHandler = this.submitHandler.bind(this);
  }
  submitHandler(searchQuery) {
    this.setState({
      q: searchQuery,
    });
  }
  render() {
    return (
      <>
        <Form onSubmit={this.submitHandler} />
        <Gallery searchQuery={this.state.q} />
        <Modal />
      </>
    );
  }
}

export default App;
