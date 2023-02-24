import styled from 'styled-components';

const ButtonStyled = styled.label`
  width: 99%;
  background-color: #ff8000;
  color: #efefef;
  border-radius: 4px;
  padding-top: 6px;
  padding-bottom: 6px;
  text-align: center;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  -webkit-transition-duration: 0.2s;

  &:hover {
    background-color: #cbcbcb;
    color: #222;
  }
`;

export { ButtonStyled };
