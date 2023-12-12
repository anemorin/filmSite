import { createContext } from "react";
import CollectionsStore from "../stores/CollectionsStore";
import AddPageStore from "../stores/AddPageStore";
import AccountStore from "../stores/AccountStore";

export const storeContext = createContext({
    collectionsStore: new CollectionsStore,
    addPageStore: new AddPageStore,
    accountStore: new AccountStore,
  });