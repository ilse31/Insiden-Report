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
      {/* <Tabs.Screen name='History' component={History} />
      <Tabs.Screen name='Profile' component={Profile} />
      <Tabs.Screen name='Home' component={Home} />
      <Tabs.Screen name='AddLaporan' component={AddLaporan} /> */}
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
