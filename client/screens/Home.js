import React, { Component, useState } from "react";
import Font, { useFonts } from "expo-font";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from "native-base";
import { FlatList, Image, StyleSheet } from "react-native";

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
			<Header>
				<Left>
					<Image source={require('../assets/logo.png')} style={{ width: 40, height: 40 }} />
				</Left>

				<Right>
					{/* SEARCH */}
					<Button transparent>
						<Icon name="search" style={{ padding: 2, color: "black" }}></Icon>
					</Button>
					{/* FILTER */}
					<Button transparent>
						<Icon name="md-options" style={{ padding: 2, color: "black" }}></Icon>
					</Button>
					{/* MENU */}
					<Button transparent>
						<Icon name="md-menu" style={{ padding: 2, color: "black" }}></Icon>
					</Button>
				</Right>
			</Header>


			<Content>
				<Card>
					<CardItem>
					</CardItem>
					{/* POST IMAGE */}
					<CardItem cardBody>
						<Image source={{ uri: 'https://www.rollingstone.com/wp-content/uploads/2018/06/inside-black-lives-matter-33f06033-8048-496e-b3c1-5290a6d9c5b8.jpg?w=1024' }} style={{ height: 200, width: null, flex: 1 }} />
					</CardItem>
					<CardItem>
						<Body>
							{/* POST TITLE */}
							<Text style={styles.postTitle}>POST TITLE</Text>
							{/* POST AUTHOR */}
							<Text note>
								By: <Text style={styles.iosBrown}>Sean Bowles</Text>
							</Text>
						</Body>
						<Right>
							<Button iconLeft transparent>
								{/* ONCLICK: LIKE */}
								<Icon name="md-heart" />
							</Button>
						</Right>
					</CardItem>
					<CardItem>
						{/* POST BODY */}
						<Text>
							Bacon ipsum dolor amet chuck bresaola pork chop pancetta, spare
							ribs short loin swine frankfurter burgdoggen turkey landjaeger.
							Porchetta pork belly short ribs spare ribs...
      					</Text>
					</CardItem>
				</Card>
			</Content>

		</Container>


	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	iosBrown: {
		fontFamily: "roboto-regular",
		color: "rgba(230,179,0,1)",
		fontWeight: "400"
	},
	postTitle: {
		fontSize: 32,
		fontFamily: "Times New Roman"
	}
});

export default HomeScreen;
