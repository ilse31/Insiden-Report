import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import {
  Box,
  NativeBaseProvider,
  Text,
  FormControl,
  Input,
  Button,
} from "native-base";
import { useState } from "react";

export default function App() {
  const [first, setfirst] = useState("udinus");

  const handleCHange = () => {
    setfirst("udinus1");
  };

  return (
    <NativeBaseProvider>
      <Box safeArea p='5' flex={1} justifyContent='center' rounded='lg'>
        {first}
        <FormControl isRequired isInvalid>
          <FormControl.Label>Username</FormControl.Label>
          <Input p={2} placeholder='Is it react?' />
          <FormControl.HelperText>
            We'll keep this between us.
          </FormControl.HelperText>
          <FormControl.ErrorMessage>{""}</FormControl.ErrorMessage>
        </FormControl>
        <Button colorScheme='primary' onPress={handleCHange}>
          Primary
        </Button>
      </Box>
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
