import styled from 'styled-components';
const Header = styled.header`
  width: 100%;
  background-color: #045f66;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 30px;
`;
const Input = styled.input`
  width: 250px;
  height: 40px;
  border: none;
  border-radius: 6px;
  padding-left: 14px;
  font-size: 18px;
`;
const Button = styled.button`
  margin-left: 10px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 6px;
  padding: 0;
  transform: translateY(4px);
`;
export { Header, Input, Button };
