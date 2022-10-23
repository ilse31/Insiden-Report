import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";
import "react-native-gesture-handler";
import Login from "./pages/Login";

export default function App() {
  return (
    <NativeBaseProvider>
      <Login />
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
