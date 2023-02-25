import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Container,
  Main,
  Form,
  FormProvider,
  DivBtnForm,
  RegisterLink,
  Title,
  BackgroundImage,
  TitleBackground,
} from './style/styles.componets';
import { appStyles } from '../../components';

export function LoginPage() {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const validate = yup
    .object({
      email: yup.string().required('Email is required'),
      password: yup.string().required('Password is required'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validate),
  });
  const onSubmit = (data) => {};

  return (
    <Container>
      <Main>
        <BackgroundImage></BackgroundImage>
        <Form onSubmit={onSubmit}>
          <FormProvider>
            <TitleBackground>
              <Title>Login</Title>
            </TitleBackground>
            <appStyles.Label>E-mail</appStyles.Label>
            <appStyles.Input validator={register} name={'email'} errors={errors} />
            <appStyles.Label>Password</appStyles.Label>
            <appStyles.Input validator={register} name={'password'} errors={errors} />
            <appStyles.Label>
              Não tem uma conta ?<RegisterLink> Inscrever-se</RegisterLink>
            </appStyles.Label>
            <DivBtnForm>
              <appStyles.Button>Entrar</appStyles.Button>
            </DivBtnForm>
          </FormProvider>
        </Form>
      </Main>
    </Container>
  );
}
