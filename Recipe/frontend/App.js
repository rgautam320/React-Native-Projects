import React from "react";
import { SafeAreaView } from "react-native";
import { enableScreens } from "react-native-screens";

import Meals from "./src/navigation/MealsNavigation";
import { store, persistor } from "./src/data/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

enableScreens();

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<SafeAreaView style={{ flex: 1 }}>
					<Meals style={{ flex: 1 }} />
				</SafeAreaView>
			</PersistGate>
		</Provider>
	);
}
