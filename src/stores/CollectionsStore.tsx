import { makeAutoObservable } from "mobx";

class CollectionsStore {
  displayMode : 'Cards' | 'Table';
  selectedTab : 'Watched' | 'WantToWatch';

  constructor() {
    makeAutoObservable(this);
    this.displayMode = 'Cards';
    this.selectedTab = 'WantToWatch'
  }

  public changeDisplayMode() {
    if (this.displayMode === 'Cards') {
      this.displayMode = 'Table';
    } else {
      this.displayMode = 'Cards';
    }
  }

  public changeSelectedTab(tab : 'Watched' | 'WantToWatch') {
    this.selectedTab = tab;
  }
}

export default CollectionsStore;