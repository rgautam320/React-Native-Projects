import React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { colors } from "../color/color";

export default function Loading() {
	return (
		<View
			style={{
				marginBottom: 10,
				justifyContent: "center",
			}}
		>
			<ActivityIndicator animating={true} color={colors.red} />
			<Text style={{ textAlign: "center" }}>Loading</Text>
		</View>
	);
}
