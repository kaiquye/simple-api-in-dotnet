import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: 99%;
  background-color: #ff8000;
  color: #efefef;
  border-radius: 4px;
  padding-top: 6px;
  border: none;
  padding-bottom: 6px;
  text-align: center;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  -webkit-transition-duration: 0.2s;

  &:hover {
    background-color: #cbcbcb;
    color: #626262;
  }
`;

export { ButtonStyled };
