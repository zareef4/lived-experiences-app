import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";
import { Container, Icon } from "native-base";
import MarkerModel from "../model/MarkerModel";
import HeaderBar from "../components/HeaderBar";

export default function MapScreen({ navigation }) {
	function getMarkers() {
		// TODO replace with call to db
		return [
			new MarkerModel(
				"1",
				{ latitude: 49.263931, longitude: -123.166615 },
				"Great place",
				"",
				true
			),
			new MarkerModel(
				"2",
				{ latitude: 49.283024, longitude: -123.098492 },
				"Bad place",
				"",
				false
			),
			new MarkerModel(
				"3",
				{ latitude: 49.279068, longitude: -123.128978 },
				"I was harassed here",
				"",
				false
			),
			new MarkerModel(
				"4",
				{ latitude: 49.242378, longitude: -123.180193 },
				"Safe for all",
				"",
				true
			),
			new MarkerModel(
				"5",
				{ latitude: 49.254405, longitude: -123.060154 },
				"",
				"",
				true
			)
		];
	}

	return (
		<Container>
			<HeaderBar />
			<Container>
				<MapView style={styles.mapStyle}>
					{getMarkers().map(marker => (
						<Marker
							key={marker.id}
							coordinate={marker.latlon}
							pinColor={marker.isGoodEvent ? "orange" : "red"}
							title={marker.title}
							description={marker.description}
						/>
					))}
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
