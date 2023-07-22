import React from 'react';
import { LoadMoreBtn, BtnWraper } from './Button.styled';
const Button = ({ onClick }) => {
  return (
    <div className="container">
      <BtnWraper>
        <LoadMoreBtn onClick={() => onClick()}>Load more</LoadMoreBtn>
      </BtnWraper>
    </div>
  );
};

export default Button;
