import React from "react";
import Font, { useFonts } from "expo-font";
import { Image } from "react-native";
import {
	Container,
	Header,
	Left,
	Body,
	Right,
	Button,
	Text,
	Content,
	Form,
	Item,
	Input
} from "native-base";

function SearchScreen({ navigation }) {
	const [loaded] = useFonts({
		Roboto: require("native-base/Fonts/Roboto.ttf"),
		Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
	});

	if (!loaded) {
		return null;
	}

	return (
		<Container
			style={{
				marginTop: "50%",
				borderTopLeftRadius: 10,
				borderTopRightRadius: 10
			}}
		>
			<Header
				style={{
					borderTopLeftRadius: 10,
					borderTopRightRadius: 10
				}}
			>
				<Left>
					<Button
						transparent
						onPress={() => {
							navigation.goBack();
						}}
					>
						<Image source={require("../assets/xIcon.png")} />
					</Button>
				</Left>
				<Right></Right>
			</Header>
			<Content>
				<Form style={{ paddingRight: 20 }}>
					<Text
						style={{
							marginLeft: 20,
							fontSize: 32,
							marginTop: 100
						}}
					>
						Find Experiences
					</Text>
					<Item>
						<Input style={{ fontSize: 32, fontWeight: "600" }} />
					</Item>
				</Form>
			</Content>
		</Container>
	);
}

export default SearchScreen;
