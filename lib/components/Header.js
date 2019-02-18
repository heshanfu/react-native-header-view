import React, { Component } from "react";
import {
	View, Text, TouchableOpacity
} from "react-native";
import Icon from "react-native-dynamic-vector-icons"
import { ifIPhoneXHeader } from './shared.style';
// Styles
import styles from './Header.style';
import colors from './colors.style';
const hitSlop = {
	top: 30, bottom: 30, left: 30, right: 30
};

export default class Header extends Component {
	render() {
		const {
			height,
			width,
			hitSlops,
			bottomStick,
			headerTitle,
			backgroundColor,
			leftComponent,
			leftComponentStyle,
			leftComponentDisable,
			leftComponentOnPress,
			rightComponent,
			rightComponentStyle,
			rightComponentDisable,
			rightComponentOnPress,
			centerComponent,
			centerComponentStyle
		} = this.props;
		return (
			<View style={[styles.outerContainer, ifIPhoneXHeader, {
				backgroundColor: backgroundColor || colors.theme.light.white,
				height: height || 50,
				width: width || "100%",
				top: bottomStick ? null : 0,
				bottom: bottomStick ? 0 : null
			}]}>
				<View style={[styles.innerContainer]}>
					{leftComponent
						|| <TouchableOpacity
							style={[leftComponentStyle || styles.leftComponentStyle, {
								opacity: leftComponentDisable ? 0 : 1,
							}]}
							hitSlop={hitSlops || hitSlop}
							onPress={leftComponentOnPress}>
							<Icon
								name="ios-arrow-back"
								type="Ionicons"
								size={30}
								color={colors.theme.light.primary}
							/>
						</TouchableOpacity>}
					{centerComponent
						|| <Text style={[centerComponentStyle || styles.centerComponentStyle]}>
							{headerTitle}
						</Text>}
					{rightComponent
						|| <TouchableOpacity
							style={[rightComponentStyle || styles.rightComponentStyle, {
								opacity: rightComponentDisable ? 0 : 1,
							}]}
							hitSlop={hitSlops || hitSlop}
							onPress={rightComponentOnPress} >
							<Icon
								name="ios-menu"
								type="ionicon"
								size={30}
								color={colors.theme.light.primaryWhite}
							/>
						</TouchableOpacity>}
				</View>
			</View>
		);
	}
}