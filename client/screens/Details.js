import React, { useEffect } from "react";
import Font, { useFonts } from "expo-font";
import { Container, Text, Button } from "native-base";

function DetailsScreen() {
	const [loaded] = useFonts({
		Roboto: require("native-base/Fonts/Roboto.ttf"),
		Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
	});

	if (!loaded) {
		return null;
	}

	return (
		<Container
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>Details Screen</Text>
		</Container>
	);
}

export default DetailsScreen;
