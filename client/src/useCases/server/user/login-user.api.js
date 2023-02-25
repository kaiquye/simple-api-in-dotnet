import { UseCaseBase } from '../../base/useCase.base';

export class LoginUser extends UseCaseBase {
  constructor() {
    super('http://localhost:5091/v1/');
  }

  async execute(body) {
    let data = {
      email: body.email,
      password: body.password,
    };

    try {
      const resp = await this.Post('user/login', data);
      return resp.data;
    } catch (e) {
      if (e.name === 'AxiosError' && e.response.status === 400) {
        alert('Error: The values sent are not the expected ones ');
      }

      if (e.name === 'AxiosError') {
        alert(e.response.data.messageError);
      }
    }
  }
}
