import React, { Component } from 'react';
import { LoadMoreBtn, BtnWraper } from './Button.styled';
class Button extends Component {
  clickHandler = () => {
    this.props.onClick();
  };
  render() {
    return (
      <div className="container">
        <BtnWraper>
          <LoadMoreBtn onClick={this.clickHandler}>Load more</LoadMoreBtn>
        </BtnWraper>
      </div>
    );
  }
}

export default Button;
