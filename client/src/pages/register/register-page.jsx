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

export function Register() {
  const [fistName, setFistName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [street, setStreet] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [city, setCity] = useState(null);

  const viaCep = new ConsultAddressViacep();

  const findAddress = async (zipCode) => {
    console.log(zipCode);
    const address = await viaCep.findAddressByZipCode(zipCode);
    setCity(address.localidade);
    setStreet(address.logradouro);
    setZipCode(zipCode);
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
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <Main>
        <BackgroundImage></BackgroundImage>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
            <appStyles.Input validator={register} name={'password'} errors={errors} onChange={setCity} />
            <appStyles.Label>Zip code</appStyles.Label>
            <appStyles.Input validator={register} name={'zip_code'} errors={errors} onBlur={findAddress} />
            <appStyles.Label>street</appStyles.Label>
            <appStyles.Input disabled={true} validator={register} name={'street'} value={street} />
            <appStyles.Label>city</appStyles.Label>
            <appStyles.Input disabled={true} validator={register} name={'city'} value={city} />
            <DivBtnForm>
              <appStyles.Button>Register</appStyles.Button>
            </DivBtnForm>
          </FormProvider>
        </Form>
      </Main>
    </Container>
  );
}
