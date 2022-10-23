import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { dataRoutesTab } from ".";
const Tabs = createBottomTabNavigator();

export const MainApp = () => {
  return (
    <Tabs.Navigator>
      {dataRoutesTab.map((route, index) => (
        <Tabs.Screen
          key={index}
          name={route.name}
          component={route.component}
        />
      ))}
    </Tabs.Navigator>
  );
};
