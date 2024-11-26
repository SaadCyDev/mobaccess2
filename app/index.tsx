import React from "react";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Greeting from "../components/Greetings"; // Your Greeting component
import AvecMobile from "../components/AvecMobile"; // Add your AvecMobile screen
import Sans from "../components/Sans"; // Add your Sans screen

// Create Stack Navigator
const Stack = createStackNavigator();

export default function Index() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Greeting"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Greeting" component={Greeting} />
          <Stack.Screen name="AvecMobile" component={AvecMobile} />
          <Stack.Screen name="Sans" component={Sans} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
