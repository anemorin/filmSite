import { makeAutoObservable } from "mobx";

class AddPageStore {
  selectedTab : 'Auto' | 'Manually';

  constructor() {
    makeAutoObservable(this);
    this.selectedTab = 'Auto'
  }

  public changeSelectedTab(tab : 'Auto' | 'Manually') {
    this.selectedTab = tab;
  }
}

export default AddPageStore;