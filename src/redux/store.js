import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import phonebookReducer from './reducers';

const persistConfig = {
    key: 'contact',
    storage,
    blacklist:['filter']
}

export const store = configureStore({
  reducer: persistReducer(persistConfig, phonebookReducer),
  devTools: true,
  middleware:[
    ...getDefaultMiddleware({
      serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })]
});

export const persistor = persistStore(store);