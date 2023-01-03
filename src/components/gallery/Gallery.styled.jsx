const { default: styled } = require('styled-components');

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style-type: none;
  gap: 30px;
`;
export { List };
