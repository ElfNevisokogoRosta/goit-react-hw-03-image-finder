const { default: styled } = require('styled-components');

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style-type: none;
  gap: 30px;
  margin-bottom: 30px;
`;
const Text = styled.span`
  display: block;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  font-size: 28px;
  cursor: default;
  color: #0e92eb;
`;
export { List, Text };
