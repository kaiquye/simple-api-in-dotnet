import styled from 'styled-components';

const InputProviderStyled = styled.input`
  width: 99%;
  border: none;
  padding-top: 5px;
  padding-bottom: 8px;
  background-color: rgb(227, 227, 227);

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px rgba(255, 0, 0, 0);
  }

  &::placeholder {
    color: rgba(0, 0, 70, 0.75);
    font-size: 8px;
  }
`;

export { InputProviderStyled };
