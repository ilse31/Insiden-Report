import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";
import "react-native-gesture-handler";
import AddLaporan from "./pages/AddLaporan";

export default function App() {
  return (
    <NativeBaseProvider>
      <AddLaporan />
      <StatusBar style='auto' />
    </NativeBaseProvider>
  );
}
