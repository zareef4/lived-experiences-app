import * as React from "react";
import { Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { StyleProvider } from "native-base";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import getTheme from "./theme/components";
import variables from "./theme/variables/platform";

import HomeScreen from "./screens/Home";
import SearchScreen from "./screens/Search";
import FilterScreen from "./screens/Filter";
import AddNewScreen from "./screens/AddNew";
import MapScreen from "./screens/Map";

const MainStack = createDrawerNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
	return (
		<MainStack.Navigator
			screenOptions={{
				headerShown: false
			}}
			drawerPosition="right"
			drawerStyle={{
				backgroundColor: "#282828"
			}}
		>
			<MainStack.Screen
				name="Home"
				component={HomeScreen}
				options={{
					drawerIcon: ({ focused, size }) => {
						return (
							<Image source={require("./assets/feedIcon.png")} />
						);
					}
				}}
			/>
			<MainStack.Screen
				name="Map"
				component={MapScreen}
				options={{
					drawerIcon: ({ focused, size }) => {
						return (
							<Image
								source={require("./assets/mapMarkerMenu.png")}
							/>
						);
					}
				}}
			/>
		</MainStack.Navigator>
	);
}

function RootStackScreen() {
	return (
		<RootStack.Navigator
			mode="modal"
			screenOptions={{
				headerShown: false
			}}
		>
			<RootStack.Screen name="Main" component={MainStackScreen} />
			<RootStack.Screen name="AddNewModal" component={AddNewScreen} />
			<RootStack.Screen
				name="SearchModal"
				component={SearchScreen}
				options={{ cardStyle: { backgroundColor: "transparent" } }}
			/>
			<RootStack.Screen name="FilterModal" component={FilterScreen} />
		</RootStack.Navigator>
	);
}

const client = new ApolloClient({
	uri: "http://192.168.86.22:4000/",
	cache: new InMemoryCache()
});

function App() {
	return (
		<ApolloProvider client={client}>
			<StyleProvider style={getTheme(variables)}>
				<NavigationContainer>
					<RootStackScreen />
				</NavigationContainer>
			</StyleProvider>
		</ApolloProvider>
	);
}

export default App;
