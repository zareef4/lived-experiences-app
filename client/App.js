import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleProvider } from "native-base";

import getTheme from "./theme/components";
import variables from "./theme/variables/platform";

import HomeScreen from "./screens/Home";
import DetailsScreen from "./screens/Details";

const Stack = createStackNavigator();

function App() {
	return (
		<StyleProvider style={getTheme(variables)}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Home"
					screenOptions={{
						headerShown: false
					}}
				>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Details" component={DetailsScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</StyleProvider>
	);
}

export default App;
