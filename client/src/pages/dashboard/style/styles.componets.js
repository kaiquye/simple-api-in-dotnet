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
  background-color: rgba(255, 198, 113, 0.24);

  display: grid;
  box-shadow: rgba(250, 72, 6, 0.71) 0px 10px 10px 10px;
  overflow: auto;
  border: 5px solid #e8e8e8;
`;

export { Container, Main };
