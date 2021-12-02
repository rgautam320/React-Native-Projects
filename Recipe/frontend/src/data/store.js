import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

import meals from "./reducers/reducer";

const persistConfig = {
	key: "root",
	version: 1,
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, meals);

export const store = configureStore({
	reducer: {
		meals: persistedReducer,
		middleware: getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	},
});

export let persistor = persistStore(store);
