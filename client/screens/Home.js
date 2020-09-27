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
import { useFocusEffect } from "@react-navigation/native";

import HeaderBar from "../components/HeaderBar";
import PostCard from "../components/PostCard";

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

	useFocusEffect(
		React.useCallback(() => {
			console.log("maybe this?");
			//refetchFn();
			return undefined;
		})
	);

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
						data.posts.map(post => (
							<PostCard post={post} key={post._id} />
						))}
				</Content>
				{/* ADD NEW BUTTON a */}
				<Fab
					onPress={() => {
						navigation.navigate("AddNewModal");
					}}
					containerStyle={{}}
					style={{ backgroundColor: "rgba(230,179,0,1)" }}
					position="bottomRight"
				>
					<Icon
						name="add"
						style={{
							color: "black",
							fontSize: 44,
							fontWeight: 1000
						}}
					/>
				</Fab>
				{/* <Fab
					onPress={() => {
						refetch();
					}}
					containerStyle={{}}
					style={{ backgroundColor: "green" }}
					position="bottomLeft"
				>
					<Icon
						name="add"
						style={{
							color: "black",
							fontSize: 44,
							fontWeight: 1000
						}}
					/>
				</Fab> */}
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
