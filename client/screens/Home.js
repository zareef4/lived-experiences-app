import React, { Component, useState } from "react";
import Font, { useFonts } from "expo-font";
import {
	Container,
	Content,
	Card,
	CardItem,
	Text,
	Button,
	Icon,
	Left,
	Body,
	Right,
	Fab
} from "native-base";
import { Image, StyleSheet } from "react-native";
import HeaderBar from "./HeaderBar";

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
			<HeaderBar/>
			<Container
				style={{
					paddingLeft: 8,
					paddingRight: 8
				}}
			>
				<Content>
					<Card>
						{/* POST IMAGE */}
						<CardItem cardBody>
							<Image
								source={{
									uri:
										"https://www.rollingstone.com/wp-content/uploads/2018/06/inside-black-lives-matter-33f06033-8048-496e-b3c1-5290a6d9c5b8.jpg?w=1024"
								}}
								style={{
									height: 200,
									width: null,
									flex: 1,
									borderTopLeftRadius: 8,
									borderTopRightRadius: 8
								}}
							/>
						</CardItem>
						<CardItem>
							<Body>
								{/* POST TITLE */}
								<Text style={styles.postTitle}>POST TITLE</Text>

								{/* POST AUTHOR */}
								<Text>
									By:{" "}
									<Text style={styles.iosBrown}>
										Sean Bowles
									</Text>
								</Text>

								{/* LOCATION */}
								<Text note>
									<Left>
										<Text>
											<Icon
												name="pin"
												style={{ color: "white" }}
											></Icon>{" "}
											Vancouver
										</Text>
									</Left>
								</Text>
							</Body>
						</CardItem>
						<CardItem>
							{/* POST BODY */}
							<Text>
								Bacon ipsum dolor amet chuck bresaola pork chop
								pancetta, spare ribs short loin swine
								frankfurter burgdoggen turkey landjaeger.
								Porchetta pork belly short ribs spare ribs...
								{/* NEED HELP IMPLEMENTING READ MORE BUTTON */}
							</Text>
						</CardItem>
						<CardItem>
							<Left>
								{/* LOVE REACTION */}
								<Button transparent>
									<Icon
										name="md-heart"
										style={styles.reactIcons}
									></Icon>
								</Button>
								{/* HAPPY REACTION */}
								<Button transparent>
									<Icon
										name="md-thumbs-up"
										style={styles.reactIcons}
									></Icon>
								</Button>
								{/* SAD REACTION*/}
								<Button transparent>
									<Icon
										name="md-thumbs-down"
										style={styles.reactIcons}
									></Icon>
								</Button>
							</Left>
							<Right>
								<Button transparent>
									<Icon
										name="md-share"
										style={styles.reactIcons}
									></Icon>
								</Button>
							</Right>
						</CardItem>
					</Card>
				</Content>
				{/* ADD NEW BUTTON a */}
				<Fab
					onPress={() => navigation.navigate("New")}
					containerStyle={{}}
					style={{ backgroundColor: "rgba(230,179,0,1)" }}
					position="bottomLeft"
				>
					<Icon name="add" />
				</Fab>
			</Container>
		</Container>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	iosBrown: {
		color: "rgba(230,179,0,1)",
		fontWeight: "400"
	},
	postTitle: {
		fontSize: 32,
		fontFamily: "Times New Roman"
	},
	reactIcons: {
		padding: 2,
		color: "white"
	}
});

export default HomeScreen;
