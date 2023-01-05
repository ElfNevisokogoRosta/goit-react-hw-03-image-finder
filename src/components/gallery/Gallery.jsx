import GalleryItem from 'components/galleryItem/GalleryItem';
import Loader from 'components/loader/Loader';
import React, { Component } from 'react';
import fetchImage from 'servises/imageAPI';
import Button from 'components/button/Button';
import { List, Text } from './Gallery.styled';
class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      res: [],
      status: 'idle',
      q: '',
      pageNumber: 1,
      totalHits: null,
      error: '',
    };
  }
  async componentDidUpdate(prevProps, prevState) {
    const queryEquality = prevProps.searchQuery === this.props.searchQuery;
    const pageEquality = prevState.pageNumber === this.state.pageNumber;
    if (queryEquality && pageEquality) {
      return;
    }
    if (!queryEquality) {
      this.setState({
        res: [],
        pageNumber: 1,
        status: 'pending',
        q: this.props.searchQuery,
      });
      this.setState({
        status: 'loading',
      });
      try {
        const images = await fetchImage(
          this.props.searchQuery,
          this.state.pageNumber
        );
        const { hits, totalHits } = images;
        this.props.toast(`We found ${totalHits} images`);
        this.setState({
          res: [...hits],
          totalHits: totalHits,
          status: 'resolved',
        });
        if (totalHits <= 0) {
          this.setState({
            status: 'error',
            error: 'cant find result for that query',
          });
        }
      } catch (error) {
        this.setState({
          status: 'error',
          error: error,
        });
      }
    }
    if (!pageEquality) {
      try {
        const images = await fetchImage(this.state.q, this.state.pageNumber);
        const { hits } = images;
        this.setState({
          res: [...prevState.res, ...hits],
        });
      } catch (error) {}
    }
  }

  onClick = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };
  render() {
    const { res, status, error, totalHits } = this.state;
    if (status === 'idle') {
      return (
        <div className="container">
          <Text>Find some images</Text>
        </div>
      );
    }
    if (status === 'loading') {
      return (
        <div className="container">
          <Loader />
        </div>
      );
    }
    if (status === 'error') {
      return (
        <div className="container">
          <div>{error}</div>
        </div>
      );
    }
    if (status === 'resolved') {
      return (
        <div className="container">
          <List>
            <GalleryItem data={res} imageHandler={this.props.imageHandler} />
          </List>
          {res.length < totalHits ? <Button onClick={this.onClick} /> : null}
        </div>
      );
    }
  }
}

export default Gallery;
