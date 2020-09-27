import React, { Component, useState } from "react";
import Font, { useFonts } from "expo-font";
import { Card, CardItem, Text, Button, Left, Right } from "native-base";
import { Image, StyleSheet } from "react-native";

function PostCard({
	post: { author, title, story, image, location, _id, anon }
}) {
	const [loaded] = useFonts({
		Roboto: require("native-base/Fonts/Roboto.ttf"),
		Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
	});

	return (
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
			<CardItem cardBody>
				{/* POST TITLE */}
				<Text style={styles.postTitle}>{title}</Text>
			</CardItem>
			<CardItem cardBody style={{ marginLeft: 20 }}>
				{/* POST AUTHOR */}
				<Text>
					By:{" "}
					<Text style={styles.iosBrown}>
						{anon ? "Anonymous" : author}
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
					<Image source={require("../assets/mapMarker.png")} />
					<Text
						style={{
							color: "rgb(116,116,116)"
						}}
					>
						{location}
					</Text>
				</Left>
				<Right>
					<Text
						style={{
							color: "rgb(116,116,116)"
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
						<Image source={require("../assets/heart.png")} />
					</Button>
					{/* HAPPY REACTION */}
					<Button transparent>
						<Image source={require("../assets/thumbUp.png")} />
					</Button>
					{/* SAD REACTION*/}
					<Button transparent>
						<Image source={require("../assets/thumbDown.png")} />
					</Button>
				</Left>
				<Right>
					<Button transparent>
						<Image source={require("../assets/share.png")} />
					</Button>
				</Right>
			</CardItem>
		</Card>
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

export default PostCard;
