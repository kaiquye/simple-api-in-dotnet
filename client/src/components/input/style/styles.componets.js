import styled from 'styled-components';

const InputProviderStyled = styled.input`
  background-color: rgb(255, 255, 255);
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
