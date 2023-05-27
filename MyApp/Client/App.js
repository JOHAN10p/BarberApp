import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Pages/Login/Login.jsx";
import Home from "./Pages/Home/Home.jsx";
import Reservation from "./Pages/Reservation/Reservation.jsx";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          <Stack.Screen
            name='/Reservation'
            component={Reservation}
            options={{ headerShown: false }}
          />
        }

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
