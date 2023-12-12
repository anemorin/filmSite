import { makeAutoObservable } from "mobx";

class AccountStore {
  isAuthorized: boolean

  constructor() {
    makeAutoObservable(this);
    this.isAuthorized = false
  }

  public setisAuthorized() {
    this.isAuthorized = true;
  }
}

export default AccountStore;