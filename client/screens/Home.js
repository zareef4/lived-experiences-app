import React, { Component, useState } from "react";
import Font, { useFonts } from "expo-font";
import { Container, Header, Content, Card, CardItem, Text, Button, Icon, Left, Body, Right, Fab } from "native-base";
import { Image, StyleSheet } from "react-native";

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
					<Button onPress={() => navigation.navigate("Home")} transparent>
						<Image source={require('../assets/logo.png')} style={{ width: 40, height: 40 }} />
					</Button>
				</Left>

				<Right>
					{/* SEARCH */}
					<Button transparent>
						<Icon onPress={() => navigation.navigate("Search")} name="search" style={styles.reactIcons}></Icon>
					</Button>
					{/* FILTER */}
					<Button onPress={() => navigation.navigate("Filter")} transparent>
						<Icon name="md-options" style={styles.reactIcons}></Icon>
					</Button>
					{/* MENU */}
					<Button onPress={() => navigation.navigate("Menu")} transparent>
						<Icon name="md-menu" style={styles.reactIcons}></Icon>
					</Button>
				</Right>
			</Header>

			<Container>
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
								<Text>
									By: <Text style={styles.iosBrown}>Sean Bowles</Text>
								</Text>

								{/* LOCATION */}
								<Text note>
									<Left>
										<Text>
											<Icon name="pin"></Icon> Vancouver
										</Text>
									</Left>
								</Text>

							</Body>
						</CardItem>
						<CardItem>
							{/* POST BODY */}
							<Text>
								Bacon ipsum dolor amet chuck bresaola pork chop pancetta, spare
								ribs short loin swine frankfurter burgdoggen turkey landjaeger.
								Porchetta pork belly short ribs spare ribs...
								 {/* NEED HELP IMPLEMENTING READ MORE BUTTON */}
							</Text>
						</CardItem>
						<CardItem>
							<Left>
								{/* LOVE REACTION */}
								<Button transparent>
									<Icon name="md-heart" style={styles.reactIcons}></Icon>
								</Button>
								{/* HAPPY REACTION */}
								<Button transparent>
									<Icon name="md-thumbs-up" style={styles.reactIcons}></Icon>
								</Button>
								{/* SAD REACTION*/}
								<Button transparent>
									<Icon name="md-thumbs-down" style={styles.reactIcons}></Icon>
								</Button>
							</Left>
							<Right>
								<Button transparent>
									<Icon name="md-share" style={styles.reactIcons}></Icon>
								</Button>
							</Right>
						</CardItem>
					</Card>

				</Content>
				{/* ADD NEW BUTTON */}
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
		color: "black"
	}
});

export default HomeScreen;
