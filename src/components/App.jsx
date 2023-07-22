import Form from './Form/Form';
import Gallery from './Gallery/Gallery';
import { Text } from './Gallery/Gallery.styled';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchImage from 'servises/imageAPI';
import Button from './Button/Button';

class App extends Component {
  state = {
    q: '',
    showModal: false,
    modalData: {},
    res: [],
    pageNumber: 1,
    total: null,
    error: '',
    status: 'idle',
  };
  async componentDidUpdate(prevProps, prevState) {
    const queryEquality = prevState.q === this.state.q;
    const pageEquality = prevState.pageNumber === this.state.pageNumber;
    if (!queryEquality) {
      this.setState({ status: 'loading', pageNumber: 1 });
      const responce = await fetchImage(this.state.q, 1);
      if (responce.hits.length === 0) {
        this.setState({
          status: 'error',
          error: 'Cant find result for this query',
        });
        toast.error('Try find somehting else');
        return;
      }
      this.setState({
        res: responce.hits,

        total: responce.total,
        status: 'resolved',
      });
      toast.success(`We found  ${responce.total} images`);
    }
    if (!pageEquality && this.state.pageNumber !== 1) {
      const response = await fetchImage(this.state.q, this.state.pageNumber);
      this.setState(prevState => ({
        res: [...prevState.res, ...response.hits],
        status: 'resolved',
      }));
    }
  }
  submitHandler = searchQuery => {
    this.setState({
      q: searchQuery,
    });
  };
  imageHandler = (largeImg, tags) => {
    this.setState({
      showModal: !this.state.showModal,
      modalData: { largeImg, tags },
    });
  };
  hideModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  showMore = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  render() {
    const { q, showModal, modalData, res, status, total } = this.state;

    return (
      <>
        <Form onSubmit={this.submitHandler} />
        {q === '' ? (
          <>
            <Text>Find some image</Text>
          </>
        ) : (
          <Gallery res={res} imageHandler={this.imageHandler} />
        )}
        {status === 'loading' ? <Loader /> : null}
        {res.length < total ? <Button onClick={this.showMore} /> : null}
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
