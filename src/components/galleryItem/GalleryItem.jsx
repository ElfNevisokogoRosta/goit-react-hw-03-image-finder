import React, { Component } from 'react';
import { Img, ListElement } from './GalleyItem.styled';
class GalleryItem extends Component {
  render() {
    const { data } = this.props;
    return data.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ListElement key={id}>
        <Img src={webformatURL} alt={tags} loading="lazy" />
      </ListElement>
    ));
  }
}

export default GalleryItem;
