import React, { useEffect } from "react";
import Font, { useFonts } from "expo-font";
import { Container, Content, Text, Button } from "native-base";

function HomeScreen({ navigation }) {
	const [loaded] = useFonts({
		Roboto: require("native-base/Fonts/Roboto.ttf"),
		Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
	});

	if (!loaded) {
		return null;
	}

	return (
		<Container>
			<Content>
				<Text>Home Screen - Native Base...</Text>
				<Button onPress={() => navigation.navigate("Details")}>
					<Text>Click Me!</Text>
				</Button>
			</Content>
		</Container>
	);
}

export default HomeScreen;
