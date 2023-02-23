import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  width: 700px;
  height: 500px;
  background-color: white;

  display: grid;
  grid-template-columns: 50% 50%;
`;

const Form = styled.form`
  width: 100%;
  height: auto;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormProvider = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #bbbbbb;
`;

export { Container, Main, Form, FormProvider };
