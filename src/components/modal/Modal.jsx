import React, { Component } from 'react';
import { Backdrop, ModalBody } from './Modal.styled';
class Modal extends Component {
  render() {
    const { largeImg, tags, onClick } = this.props;
    return (
      <Backdrop onClick={() => onClick()}>
        <ModalBody>
          <img src={largeImg} alt={tags} loading="lazy" />
        </ModalBody>
      </Backdrop>
    );
  }
}

export default Modal;
