import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";
import "react-native-gesture-handler";

import StackRoutes from "./routes/StackRoutes";

export default function App() {
  return (
    <NativeBaseProvider>
      <StackRoutes />
      <StatusBar style='auto' />
    </NativeBaseProvider>
  );
}
