import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  background-repeat: no-repeat;
  position: relative;
  position: center;
  background-position: center;
  background-size: 100%;
  background-image: url('https://i1.wp.com/multarte.com.br/wp-content/uploads/2019/01/fundo-laranja13.jpeg?w=1920&ssl=1');
`;

const Main = styled.main`
  width: 700px;
  height: 500px;
  background-color: #d00000;

  display: grid;
  grid-template-columns: 50% 50%;
  box-shadow: rgba(250, 72, 6, 0.71) 0px 10px 10px 10px;
`;

export { Container, Main };
