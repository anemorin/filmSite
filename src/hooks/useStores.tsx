import React from 'react';
import { storeContext } from '../context/index';

/** Хук для работы со стором */
const UseStores = () => React.useContext(storeContext);

export default UseStores;
