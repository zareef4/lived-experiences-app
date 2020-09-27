import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";
import { Container, Icon, Text } from "native-base";
import { useQuery, gql, NetworkStatus } from "@apollo/client";

import MarkerModel from "../model/MarkerModel";
import HeaderBar from "../components/HeaderBar";

const POSTS = gql`
	query {
		posts {
			title
			location
			_id
			lat
			long
			positiveExperience
		}
	}
`;

export default function MapScreen({ navigation }) {
	const { loading, error, data, refetch, networkStatus } = useQuery(POSTS, {
		notifyOnNetworkStatusChange: true
	});

	if (networkStatus === NetworkStatus.refetch)
		return <Text>Refetching...</Text>;
	if (loading) return <Text>Loading...</Text>;
	if (error) return <Text>Error :(</Text>;

	return (
		<Container>
			<HeaderBar />
			<Container>
				<MapView style={styles.mapStyle}>
					{data.posts &&
						data.posts.map(post => {
							let marker = new MarkerModel(
								post._id,
								{
									latitude: parseFloat(post.lat),
									longitude: parseFloat(post.long)
								},
								post.title,
								"",
								post.positiveExperience
							);
							return (
								<Marker
									key={marker.id}
									coordinate={marker.latlon}
									pinColor={
										marker.isGoodEvent ? "orange" : "red"
									}
									title={marker.title}
									description={marker.description}
								/>
							);
						})}
				</MapView>
				<Icon
					style={{
						position: "absolute",
						bottom: 50,
						fontSize: 60,
						color: "orange"
					}}
					name="add-circle"
					type="MaterialIcons"
					onPress={() => navigation.navigate("AddNew")}
				/>
			</Container>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	mapStyle: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height
	}
});
