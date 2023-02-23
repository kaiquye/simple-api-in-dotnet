import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Main, Form, FormProvider } from './style/styles.componets';
import { appStyle } from '../../components';

export function LoginPage() {
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
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <Main>
        <h2>LOGIN</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormProvider>
            <appStyle.Label>E-mail</appStyle.Label>
            <appStyle.Input validator={register} name={'email'} errors={errors} />
            <appStyle.Label>Password</appStyle.Label>
            <appStyle.Input validator={register} name={'password'} errors={errors} />
            <appStyle.Button>login</appStyle.Button>
          </FormProvider>
        </Form>
      </Main>
    </Container>
  );
}
