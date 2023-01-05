import Form from './form/Form';
import Gallery from './gallery/Gallery';
import Modal from './modal/Modal';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      q: '',
      showModal: false,
      modalData: {},
    };
    this.submitHandler = this.submitHandler.bind(this);
  }
  submitHandler(searchQuery) {
    this.setState({
      q: searchQuery,
    });
  }
  imageHandler = (largeImg, tags) => {
    this.setState({
      showModal: !this.state.showModal,
      modalData: { largeImg, tags },
    });
  };
  hideModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  render() {
    const { q, showModal, modalData } = this.state;
    return (
      <>
        <Form onSubmit={this.submitHandler} />
        <Gallery
          searchQuery={q}
          toast={toast}
          imageHandler={this.imageHandler}
        />
        {showModal ? (
          <Modal
            largeImg={modalData.largeImg}
            tags={modalData.tags}
            onClick={this.hideModal}
          />
        ) : null}
        <ToastContainer />
      </>
    );
  }
}

export default App;
