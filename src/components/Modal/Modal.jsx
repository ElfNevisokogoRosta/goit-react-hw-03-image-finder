import React, { Component } from 'react';
import { Backdrop, ModalBody } from './Modal.styled';
import PropTypes from 'prop-types';
class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.keyHandler);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyHandler);
  }
  modalClose = e => {
    if (e.target.alt) {
      return;
    }
    this.props.onClick();
  };
  keyHandler = e => {
    if (e.key === 'Escape') {
      this.props.onClick();
    }
  };
  render() {
    const { largeImg, tags } = this.props;
    return (
      <Backdrop onClick={this.modalClose}>
        <ModalBody>
          <img src={largeImg} alt={tags} loading="lazy" />
        </ModalBody>
      </Backdrop>
    );
  }
}

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Modal;
