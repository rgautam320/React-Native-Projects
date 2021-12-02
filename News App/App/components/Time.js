import React from "react";
import { Text } from "native-base";

import moment from "moment";

export default function Time({ date }) {
	const time = moment(date || moment.now()).fromNow();
	return (
		<Text note style={{ fontSize: 14, marginVertical: 4 }}>
			{time}
		</Text>
	);
}
