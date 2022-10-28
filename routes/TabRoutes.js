import { dataRoutesTab } from ".";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();
export const MainApp = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#005C9F",
          height: 55,
        },
      }}>
      {dataRoutesTab.map((item, index) => (
        <Tabs.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            headerShown: false,
          }}
        />
      ))}
    </Tabs.Navigator>
  );
};
