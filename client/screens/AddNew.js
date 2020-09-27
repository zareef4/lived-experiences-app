import React, { useState } from "react";
import { StyleSheet, Switch, Image } from "react-native";
import {
	Button,
	Container,
	Header,
	Content,
	Form,
	Item,
	Input,
	Icon,
	Label,
	Textarea,
	View,
	Left,
	Right,
	CheckBox,
	Text,
	Body
} from "native-base";
import { gql, useMutation } from "@apollo/client";

const CREATE_POST = gql`
	mutation AddPost($post: PostInput!) {
		createPost(post: $post) {
			author
			title
			story
			location
			image
			_id
		}
	}
`;

export default function AddNew({ navigation }) {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [location, setLocation] = useState("");
	const [story, setStory] = useState("");
	const [isAnon, setIsAnon] = useState(false);
	const [createPost, { data }] = useMutation(CREATE_POST);

	function onSubmit() {
		let lat, long;

		switch (location) {
			case "Vancouver":
				lat = "49.281914";
				long = "-123.121234";
				break;
			case "Chinatown":
				lat = "49.280688";
				long = "-123.108517";
				break;
			case "Main Street":
				lat = "49.245767";
				long = "-123.101282";
				break;
			default:
				lat = "49.245767";
				long = "-123.101282";
		}

		createPost({
			variables: {
				post: {
					title,
					author,
					location,
					story,
					anon: isAnon,
					lat,
					long
				}
			}
		}).catch(err => console.log(JSON.stringify(err)));

		setTitle("");
		setAuthor("");
		setLocation("");
		setStory("");
		setIsAnon(false);

		navigation.goBack();
	}

	return (
		<Container>
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
				<Right>
					<Button transparent>
						<Text style={styles.iosBrown} onPress={onSubmit}>
							Post
						</Text>
					</Button>
				</Right>
			</Header>
			<Content>
				<Form style={styles.form}>
					<Item style={{ marginRight: 15 }}>
						<Input
							value={title}
							onChangeText={setTitle}
							placeholder="Add a Title"
							style={{
								fontSize: 32,
								fontWeight: "600"
							}}
						/>
					</Item>

					{/* UPLOAD IMAGE INPUT HERE */}
					<Textarea
						rowSpan={6}
						style={{
							margin: 15,
							fontSize: 16,
							backgroundColor: "rgb(51,50,50)"
						}}
						placeholder="PLACEHOLDER FOR IMAGE UPLOADER"
					/>

					<Item style={{ width: "50%", marginBottom: 10 }}>
						{/* Name */}
						<Input
							placeholder="Enter your name"
							value={author}
							onChangeText={t => setAuthor(t)}
						/>
					</Item>

					{/* Post anonymously */}
					<Item
						style={{ borderBottomColor: "#282828", width: "50%" }}
						onPress={() => {
							setIsAnon(!isAnon);
						}}
					>
						<CheckBox checked={isAnon} />
						<Body>
							<Text>Post Anonymously</Text>
						</Body>
					</Item>

					{/* Location */}
					<Item
						floatingLabel
						style={{ borderBottomColor: "#282828", width: "50%" }}
					>
						<Icon
							name="pin"
							style={{ color: "rgb(74,74,74)" }}
						></Icon>

						<Input
							value={location}
							placeholder="Add Locaton"
							onChangeText={t => setLocation(t)}
						/>
					</Item>

					{/* TODO isGoodExperience?? */}

					{/* Story */}
					<Textarea
						value={story}
						onChangeText={setStory}
						rowSpan={8}
						style={{
							margin: 15,
							fontSize: 16,
							backgroundColor: "rgb(51,50,50)"
						}}
						placeholder="Write your story..."
					/>
					{/* Add characer limit if possible, not important for MVP */}
				</Form>
			</Content>
		</Container>
	);
}

const styles = StyleSheet.create({
	form: { paddingLeft: 10, paddingRight: 10 },
	iosBrown: {
		color: "rgba(230,179,0,1)",
		fontSize: 18
	}
});
