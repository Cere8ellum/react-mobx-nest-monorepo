import { makeAutoObservable } from "mobx";

interface IAuthStore {
  isAuthenticated: boolean;
  accessToken: string;
}

class AuthStore implements IAuthStore {
  isAuthenticated = false;
  accessToken = "";

  constructor() {
    makeAutoObservable(this);
  }

  setAuth = (token: string) => {
    this.isAuthenticated = true;
    this.accessToken = token;
  };

  clearAuth = () => {
    this.isAuthenticated = false;
    this.accessToken = "";
  };
}

export default AuthStore;
