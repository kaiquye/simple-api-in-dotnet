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
import { LoginUser } from '../../useCases/server/user/login-user.api';
import { Link } from 'react-router-dom';

export function LoginPage() {
  const login = new LoginUser();
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const loginUser = async () => {
    const logged = await login.execute({
      email,
      password,
    });

    if (logged?.status === 201 || logged?.success === true) {
      alert('user logged');
    }
  };

  const validate = yup
    .object({
      email: yup.string().required('Email is required'),
      password: yup.string().required('Password is required'),
    })
    .required();

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validate),
  });
  const onSubmit = async (event) => {
    event.preventDefault();
    await loginUser();
  };

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
            <appStyles.Input validator={register} name={'email'} errors={errors} onChange={setEmail} />
            <appStyles.Label>Password</appStyles.Label>
            <appStyles.Input validator={register} name={'password'} errors={errors} onChange={setPassword} />
            <appStyles.Label>
              Não tem uma conta ?<Link to={'/register'}> Inscrever-se</Link>
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
