import { Container, Form, FormProvider, Main } from './style/styles.componets';
import {
  BackgroundImage,
  DivBtnForm,
  RegisterLink,
  Title,
  TitleBackground,
} from '../login/style/styles.componets';
import { appStyles } from '../../components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ConsultAddressViacep } from '../../useCases/via-cep/consult-address.viacep';
import { useState } from 'react';
import { CreateUser } from '../../useCases/api/create-user.api';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export function Register() {
  const [fistName, setFistName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [street, setStreet] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [city, setCity] = useState(null);
  const navigate = useNavigate();

  const viaCep = new ConsultAddressViacep();
  const createUserService = new CreateUser();

  const findAddress = async (zipCode) => {
    setZipCode(zipCode);
    const address = await viaCep.findAddressByZipCode(zipCode);
    if (address) {
      setCity(address.localidade);
      setStreet(address.logradouro);
    }
  };

  const createUser = async () => {
    const created = await createUserService.createUser({
      fistName,
      lastName,
      email,
      password,
      street,
      city,
      zipCode,
    });

    if (created?.status === 201 || created?.success === true) {
      alert('user created with success');
      return navigate('/login');
    }
  };

  const validate = yup
    .object({
      email: yup.string().required('Email is required'),
      fist_name: yup.string().required(),
      last_name: yup.string().required(),
      password: yup.string().required(),
      street: yup.string().required(),
      zip_code: yup.string().required(),
      city: yup.string(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validate),
  });
  const onSubmit = async (event) => {
    event.preventDefault();
    await createUser();
  };

  return (
    <Container>
      <Main>
        <BackgroundImage></BackgroundImage>
        <Form onSubmit={(event) => onSubmit(event)}>
          <FormProvider>
            <TitleBackground>
              <Title>Register</Title>
            </TitleBackground>
            <appStyles.Label>Fist name</appStyles.Label>
            <appStyles.Input validator={register} name={'fist_name'} errors={errors} onChange={setFistName} />
            <appStyles.Label>Last name</appStyles.Label>
            <appStyles.Input validator={register} name={'last_name'} errors={errors} onChange={setLastName} />
            <appStyles.Label>E-mail</appStyles.Label>
            <appStyles.Input validator={register} name={'email'} errors={errors} onChange={setEmail} />
            <appStyles.Label>Password</appStyles.Label>
            <appStyles.Input validator={register} name={'password'} errors={errors} onChange={setPassword} />
            <appStyles.Label>Zip code</appStyles.Label>
            <appStyles.Input validator={register} name={'zip_code'} errors={errors} onBlur={findAddress} />
            <appStyles.Label>street</appStyles.Label>
            <appStyles.Input disabled={true} validator={register} name={street ?? 'street'} value={street} />
            <appStyles.Label>city</appStyles.Label>
            <appStyles.Input disabled={true} validator={register} name={city ?? 'city'} value={city} />
            <button>tested</button>

            <DivBtnForm>
              <appStyles.Button>Register</appStyles.Button>
            </DivBtnForm>
          </FormProvider>
        </Form>
      </Main>
    </Container>
  );
}
