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
import { useQuery, gql, NetworkStatus } from "@apollo/client";

import HeaderBar from "../components/HeaderBar";

const POSTS = gql`
	query {
		posts {
			author
			title
			story
			location
			image
			_id
		}
	}
`;

function HomeScreen({ navigation }) {
	const [loaded] = useFonts({
		Roboto: require("native-base/Fonts/Roboto.ttf"),
		Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
	});

	const { loading, error, data, refetch, networkStatus } = useQuery(POSTS, {
		notifyOnNetworkStatusChange: true
	});

	if (networkStatus === NetworkStatus.refetch)
		return <Text>Refetching...</Text>;
	if (loading) return <Text>Loading...</Text>;
	if (error) return <Text>Error :(</Text>;

	if (!loaded) {
		return null;
	}

	return (
		<Container>
			<HeaderBar />
			<Container
				style={{
					paddingLeft: 8,
					paddingRight: 8
				}}
			>
				<Content>
					{data &&
						data.posts.map(
							({
								author,
								title,
								story,
								image,
								location,
								_id
							}) => {
								return (
									<Card key={_id}>
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
												<Text style={styles.postTitle}>
													{title}
												</Text>

												{/* POST AUTHOR */}
												<Text>
													By:{" "}
													<Text
														style={styles.iosBrown}
													>
														{author}
													</Text>
												</Text>

												{/* LOCATION */}
												<Text note>
													<Left>
														<Text>
															<Icon
																name="pin"
																style={{
																	color:
																		"white"
																}}
															></Icon>{" "}
															{location}
														</Text>
													</Left>
												</Text>
											</Body>
										</CardItem>
										<CardItem>
											{/* POST BODY */}
											<Text>
												{story}
												{/* NEED HELP IMPLEMENTING READ MORE BUTTON */}
											</Text>
										</CardItem>
										<CardItem>
											<Left>
												{/* LOVE REACTION */}
												<Button transparent>
													<Icon
														name="md-heart"
														style={
															styles.reactIcons
														}
													></Icon>
												</Button>
												{/* HAPPY REACTION */}
												<Button transparent>
													<Icon
														name="md-thumbs-up"
														style={
															styles.reactIcons
														}
													></Icon>
												</Button>
												{/* SAD REACTION*/}
												<Button transparent>
													<Icon
														name="md-thumbs-down"
														style={
															styles.reactIcons
														}
													></Icon>
												</Button>
											</Left>
											<Right>
												<Button transparent>
													<Icon
														name="md-share"
														style={
															styles.reactIcons
														}
													></Icon>
												</Button>
											</Right>
										</CardItem>
									</Card>
								);
							}
						)}
				</Content>
				{/* ADD NEW BUTTON a */}
				<Fab
					onPress={() => {
						navigation.setOptions({ refetch });
						navigation.navigate("AddNewModal");
					}}
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
		fontSize: 32
	},
	reactIcons: {
		padding: 2,
		color: "white"
	}
});

export default HomeScreen;
