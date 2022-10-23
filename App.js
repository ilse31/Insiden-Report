import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";
import AddLaporan from "./pages/AddLaporan";

export default function App() {
  return (
    <NativeBaseProvider>
      <AddLaporan />
      <StatusBar style='auto' />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
