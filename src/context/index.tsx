import { createContext } from "react";
import CollectionsStore from "../stores/CollectionsStore";
import AddPageStore from "../stores/AddPageStore";

export const storeContext = createContext({
    collectionsStore: new CollectionsStore,
    addPageStore: new AddPageStore,
  });