import { makeAutoObservable } from "mobx";

export interface IResponseLoadingState {
  loading: boolean;
}

export default class RequestProcessStore implements IResponseLoadingState {
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading = (loading: boolean) => {
    this.loading = loading;
  };
}
