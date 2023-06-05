import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Pages/Login/Login.jsx";
import Home from "./Pages/Home/Home.jsx";
import Reservation from "./Pages/Reservation/Reservation.jsx";
import Products from "./Pages/Products/Products.jsx";
import Clients from "./Pages/Clients/Clients.jsx";
import Barbers from "./Pages/Barbers/SelectBarber.jsx";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          <Stack.Screen
            name='/Barbers'
            component={Barbers}
            options={{ headerShown: false }}
          />
        }
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
            name='/Products'
            component={Products}
            options={{ headerShown: false }}
          />
        }
        {
          <Stack.Screen
            name='/Clients'
            component={Clients}
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
