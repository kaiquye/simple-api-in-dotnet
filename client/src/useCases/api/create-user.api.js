import { UseCaseBase } from '../base/useCase.base';

export class CreateUser extends UseCaseBase {
  constructor() {
    super('http://localhost:5091/v1/');
  }

  async createUser(body) {
    let data = {
      fist_name: body.fistName,
      last_name: body.lastName,
      email: body.email,
      password: body.password,
      address: {
        street: body.street,
        zip_code: body.zipCode,
        city: body.city,
      },
    };

    console.log('data', data);
    try {
      const resp = await this.Post('user', data);
      return resp.data;
    } catch (e) {
      console.log(e);
      if (e.name === 'AxiosError') {
        alert('server error ' + e.message);
      }
    }
  }
}
