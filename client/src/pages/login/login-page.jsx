import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Main, Form, FormProvider } from './style/styles.componets';
import { InputProvider } from '../../components/input';

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
            <label>e-mail</label>
            <InputProvider validator={register} name={'email'} errors={errors} />
            <label>Password</label>
            <InputProvider validator={register} name={'password'} errors={errors} />
            <button>login</button>
          </FormProvider>
        </Form>
      </Main>
    </Container>
  );
}
