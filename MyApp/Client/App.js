import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Components/Login/Login.jsx";
import Home from "./Components/Home/Home.jsx";
import RegisterCharacter from "./Components/RegisterChurch/Register.jsx";
import RegisterPark from "./Components/RegisterParks/Register.jsx";
import Client from "./Components/Client/Register.jsx";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          <Stack.Screen
            name='Home'
            component={Home}
            options={{ headerShown: false }}
          />
        }

        {
          <Stack.Screen
            name='/'
            component={Login}
            options={{ headerShown: false }}
          />
        }

        {
          <Stack.Screen
            name='RegisterPark'
            component={RegisterPark}
            options={{ headerShown: false }}
          />
        }

        {
          <Stack.Screen
            name='RegisterChurch'
            component={RegisterCharacter}
            options={{ headerShown: false }}
          />
        }

        {
          <Stack.Screen
            name='Client'
            component={Client}
            options={{ headerShown: false }}
          />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
