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
			anon
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
								_id,
								anon
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
										<CardItem cardBody>
											{/* POST TITLE */}
											<Text style={styles.postTitle}>
												{title}
											</Text>
										</CardItem>
										<CardItem
											cardBody
											style={{ marginLeft: 20 }}
										>
											{/* POST AUTHOR */}
											<Text>
												By:{" "}
												<Text style={styles.iosBrown}>
													{anon
														? "Anonymous"
														: author}
												</Text>
											</Text>
										</CardItem>
										{/* LOCATION */}
										<CardItem
											cardBody
											style={{
												marginLeft: 20,
												marginRight: 20
											}}
										>
											<Left>
												<Image
													source={require("../assets/mapMarker.png")}
												/>
												<Text
													style={{
														color:
															"rgb(116,116,116)"
													}}
												>
													{location}
												</Text>
											</Left>
											<Right>
												<Text
													style={{
														color:
															"rgb(116,116,116)"
													}}
												>
													4 hours ago
												</Text>
											</Right>
										</CardItem>
										<CardItem
											cardBody
											style={{
												marginLeft: 20,
												marginRight: 20
											}}
										>
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
													<Image
														source={require("../assets/heart.png")}
													/>
												</Button>
												{/* HAPPY REACTION */}
												<Button transparent>
													<Image
														source={require("../assets/thumbUp.png")}
													/>
												</Button>
												{/* SAD REACTION*/}
												<Button transparent>
													<Image
														source={require("../assets/thumbDown.png")}
													/>
												</Button>
											</Left>
											<Right>
												<Button transparent>
													<Image
														source={require("../assets/share.png")}
													/>
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
		fontSize: 32,
		marginLeft: 20
	},
	reactIcons: {
		padding: 2,
		color: "white"
	}
});

export default HomeScreen;
