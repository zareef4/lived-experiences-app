import React from "react";
import { StyleSheet, Switch, Text } from "react-native";
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
	View
} from "native-base";

export default function AddNew() {
	const [title, setTitle] = React.useState("");
	const [name, setName] = React.useState("");
	const [location, setLocation] = React.useState("");
	const [story, setStory] = React.useState("");
	const [disableName, setDisableName] = React.useState(false);

	function checkAnon() {
		setDisableName(prev => !prev);
	}

	function onSubmit() {
		// TODO
	}

	return (
		<Container>
			<Content>
				<Form style={styles.form}>
					<View style={{ justifyContent: 'flex-end', flexDirection: "row", marginRight: 15 }}>
						<Button transparent>
							<Text style={styles.iosBrown} onPress={onSubmit}>
								Post
							</Text>
						</Button>
					</View>
					<Item>
						<Input value={title} onChangeText={setTitle} placeholder="Add a Title" style={{ fontSize: 32, fontWeight: "600" }} />
					</Item>

					{/* UPLOAD IMAGE INPUT HERE */}
					<Textarea
						
						rowSpan={6}
						style={{ margin: 15, fontSize: 16, backgroundColor: "rgb(51,50,50)" }}
						placeholder="PLACEHOLDER FOR IMAGE UPLOADER"
					/>

					<Item disabled={disableName}>
						{/* Name */}
						<Input 
							placeholder= "Enter your name"
							disabled={disableName}
							value={name}
							onChangeText={t => setName(t)}
						/>
					</Item>

					{/* Post anonymously */}
					<Item>
						<Label style={{ color: "white", fontSize: 16 }}>Post Anonymously</Label>
						<Switch
							trackColor={{ false: "#81b0ffrg", true: "#81b0ffrgb(230,179,0)" }}
							ios_backgroundColor="#3e3e3e"
							onValueChange={checkAnon}
							value={disableName}
						/>
					</Item>

					{/* Location */}
					<Item floatingLabel>
						<Icon
							name="pin"
							style={{ color: "rgb(74,74,74)" }}
						/>

						<Input
							value={location}
							placeholder="Add Location"
							onChangeText={t => setLocation(t)}
						/>
					</Item>

					{/* TODO isGoodExperience?? */}



					{/* Story */}
					<Textarea
						value={story}
						onChangeText={setStory}
						rowSpan={8}
						style={{ margin: 15, fontSize: 16, backgroundColor: "rgb(51,50,50)" }}
						placeholder="Write your story..."
					/>
					{/* Add characer limit if possible, not important for MVP */}
				</Form>
			</Content>
		</Container>
	);
}

const styles = StyleSheet.create({
	form: {},
	iosBrown: {
		color: "rgba(230,179,0,1)",
		fontWeight: "700",
		fontSize: 18
	}
});
