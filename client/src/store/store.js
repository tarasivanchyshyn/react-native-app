// import { configureStore } from '@reduxjs/toolkit';
// import mainReducer from './mainSlice';

// const store = configureStore({
//   reducer: mainReducer
// });

// export default store;

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import mainReducer from './mainSlice';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
});

export const persistor = persistStore(store);
export default store;
