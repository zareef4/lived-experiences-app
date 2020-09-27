import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleProvider } from "native-base";

import getTheme from "./theme/components";
import variables from "./theme/variables/platform";

import HomeScreen from "./screens/Home";
import DetailsScreen from "./screens/Details";
import AddNewScreen from "./screens/AddNew";
import MapScreen from "./screens/MapScreen"
import {createDrawerNavigator} from "@react-navigation/drawer";
import SearchScreen from "./screens/SearchScreen";

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
	return (
		<MainStack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<MainStack.Screen name="Home" component={HomeScreen} />
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
			<RootStack.Screen name="Search" component={SearchScreen}/>
		</RootStack.Navigator>
	);
}


function App() {
	return (
		<StyleProvider style={getTheme(variables)}>
			<NavigationContainer>
				<RootStackScreen />
			</NavigationContainer>
		</StyleProvider>
	);
}

export default App;
