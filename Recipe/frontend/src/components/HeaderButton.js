import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const CustonHeaderButton = (props) => {
	return <HeaderButton {...props} iconSize={23} color={colors.white} IconComponent={Ionicons} />;
};

export default CustonHeaderButton;
