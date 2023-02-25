import { UseCaseBase } from '../base/useCase.base';

export class ConsultAddressViacep extends UseCaseBase {
  constructor() {
    super('https://viacep.com.br/ws/');
  }

  async findAddressByZipCode(zipCode) {
    if (!zipCode) {
      return null;
    }
    const { data } = await this.Get(`${zipCode}/json/`);
    return data;
  }
}
