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

export function Register() {
  const validate = yup.object({
    email: yup.string().required(),
    fist_name: yup.string().required(),
    last_name: yup.string().required(),
    password: yup.string().required(),
    street: yup.string().required(),
    zip_code: yup.string().required(),
    city: yup.string(),
  });

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
            <appStyles.Input validator={register} name={'fist_name'} errors={errors} />
            <appStyles.Label>Last name</appStyles.Label>
            <appStyles.Input validator={register} name={'last_name'} errors={errors} />
            <appStyles.Label>E-mail</appStyles.Label>
            <appStyles.Input validator={register} name={' email'} errors={errors} />
            <appStyles.Label>Password</appStyles.Label>
            <appStyles.Input validator={register} name={' password'} errors={errors} />
            <appStyles.Label>Zip code</appStyles.Label>
            <appStyles.Input validator={register} name={' zip_code'} errors={errors} />
            <appStyles.Label>street</appStyles.Label>
            <appStyles.Input validator={register} name={' password'} errors={errors} />
            <appStyles.Label>city</appStyles.Label>
            <appStyles.Input validator={register} name={' zip_code'} errors={errors} />
            <DivBtnForm>
              <appStyles.Button>Register</appStyles.Button>
            </DivBtnForm>
          </FormProvider>
        </Form>
      </Main>
    </Container>
  );
}
