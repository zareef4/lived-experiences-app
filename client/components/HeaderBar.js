import { Button, Header, Icon, Left, Right } from "native-base";
import { Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function HeaderBar() {
	const navigation = useNavigation();

	return (
		<Header>
			<Left>
				<Button onPress={() => navigation.navigate("Home")} transparent>
					<Image
						source={require("../assets/logo.png")}
						style={{ width: 40, height: 40 }}
					/>
				</Button>
			</Left>

			<Right>
				{/* SEARCH */}
				<Button
					transparent
					onPress={() => navigation.navigate("SearchModal")}
					style={{
						backgroundColor: "rgb(51, 50, 50)",
						borderRadius: 5
					}}
				>
					<Image source={require("../assets/searchIcon.png")} />
				</Button>
				{/* FILTER */}
				<Button
					onPress={() => navigation.navigate("FilterModal")}
					transparent
					style={{
						backgroundColor: "rgb(51, 50, 50)",
						borderRadius: 5,
						marginLeft: 15
					}}
				>
					<Image source={require("../assets/filterIcon.png")} />
				</Button>
				{/* MENU */}
				<Button onPress={() => navigation.openDrawer()} transparent>
					<Image source={require("../assets/menuButton.png")} />
				</Button>
			</Right>
		</Header>
	);
}

const styles = StyleSheet.create({
	reactIcons: {
		padding: 2,
		color: "white"
	}
});
