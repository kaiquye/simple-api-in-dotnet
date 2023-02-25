import axios from 'axios';

// depois trocar  por  classe abstract com typescript
export class UseCaseBase {
  baseUrl = '';
  instance;

  constructor(baseUrl) {
    if (!baseUrl) {
      throw new Error('url was not specified');
    }

    this.baseUrl = baseUrl;
    this.instance = axios.create({});
  }

  async Post(url, data = undefined, params = undefined, headers = undefined) {
    return this.instance({
      method: 'POST',
      data: data ? data : null,
      url: `${this.baseUrl}${url}`,
      params: params ? params : null,
      headers: headers ? headers : null,
      withCredentials: true,
    });
  }

  async Get(url, data, params = undefined, headers = undefined, Credentials = false) {
    return await this.instance({
      method: 'GET',
      url: `${this.baseUrl}${url}`,
      params: params ? params : null,
      headers: headers ? headers : null,
      withCredentials: Credentials,
    });
  }
}
