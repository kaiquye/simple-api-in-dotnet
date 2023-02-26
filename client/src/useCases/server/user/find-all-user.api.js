import { UseCaseBase } from '../../base/useCase.base';
import { TokenStorage } from '../../client/storage/auth.local-store';

export class FindAllUser extends UseCaseBase {
  constructor() {
    super('http://localhost:5091/v1/');
  }

  async execute(body) {
    try {
      const token = TokenStorage().get();

      const resp = await this.Post('user', null, null, {
        authorization: 'bearer ' + token,
      });

      return resp.data;
    } catch (e) {
      console.log(e);
      if (e.name === 'AxiosError' && e.response.status === 400) {
        alert('Error: The values sent are not the expected ones ');
      }

      if (e.name === 'AxiosError') {
        alert(e.response.data.messageError);
      }
    }
  }
}
