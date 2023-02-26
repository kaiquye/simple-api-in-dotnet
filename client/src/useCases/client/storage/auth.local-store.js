const NAME_TOKEN = 'auth.user.app';
export function TokenStorage() {
  return {
    add: (item) => {
      return localStorage.setItem(NAME_TOKEN, item);
    },
    get: () => {
      return localStorage.getItem(NAME_TOKEN);
    },
    logout: () => {
      return localStorage.removeItem(NAME_TOKEN);
    },
  };
}
