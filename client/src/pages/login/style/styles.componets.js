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

const Form = styled.form`
  width: 100%;
  height: auto;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormProvider = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const DivBtnForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

const RegisterLink = styled.a`
  color: red;
  text-decoration: none;
`;

const TitleBackground = styled.h1`
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-family: Arial;
  font-size: 24px;
  padding-bottom: 10px;
  color: #222;
`;

const BackgroundImage = styled.div`
  background-color: black;
  background-size: 190%;
  background-image: url('https://media.istockphoto.com/id/1098338900/photo/close-up-full-length-body-size-photo-of-attractive-active-cheer.jpg?s=612x612&w=0&k=20&c=IwHyumPWXgmsDU_0IdCm8-nXN2RuUPEXJhCT7g2gvH4=');
  background-position: center;
  position: relative;
`;

export {
  Container,
  Title,
  Main,
  Form,
  TitleBackground,
  FormProvider,
  BackgroundImage,
  RegisterLink,
  DivBtnForm,
};
