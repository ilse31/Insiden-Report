import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { dataRoutesStack } from ".";

const Stack = createStackNavigator();

const StackRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {dataRoutesStack.map((item, index) => (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{
              headerShown: false,
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoutes;
