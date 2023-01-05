const { default: styled } = require('styled-components');

const LoadMoreBtn = styled.button`
  width: 140px;
  padding: 10px 12px;
  font-size: 18px;
  border: none;
  background-color: #0b6e75;
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #9ee65c;
    color: #000000;
  }
`;

const BtnWraper = styled.div`
  padding: 30px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export { LoadMoreBtn, BtnWraper };
