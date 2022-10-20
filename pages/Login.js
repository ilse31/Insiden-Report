import { StyleSheet } from "react-native";
import React from "react";
import { Box, VStack, FormControl, Input, Button, Heading } from "native-base";
import { useState } from "react";

const Login = () => {
  const [LoginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  // eventt handler
  const handleCHange = (key, value) => {
    setLoginForm({ ...LoginForm, [key]: value });
  };

  const handleSubmit = () => {};
  return (
    <Box safeArea p='5' flex={1} justifyContent='center' rounded='lg'>
      <Heading>Login</Heading>
      {/* Ini form */}
      <VStack space='5'>
        <FormControl isRequired isInvalid>
          <FormControl.Label>Username</FormControl.Label>
          <Input
            onChangeText={(value) => handleCHange("username", value)}
            type='text'
            key='username'
            p={2}
            placeholder='Masukkan Username'
          />
          <FormControl.HelperText>
            We'll keep this between us.
          </FormControl.HelperText>
          <FormControl.ErrorMessage>{""}</FormControl.ErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            key='password'
            onChangeText={(value) => handleCHange("password", value)}
            type='password'
            p={2}
            placeholder='Masukkan Password'
          />
          <FormControl.HelperText>{""}</FormControl.HelperText>
          <FormControl.ErrorMessage>{""}</FormControl.ErrorMessage>
        </FormControl>
      </VStack>
      <VStack space={5}>
        <Button colorScheme='primary' onPress={handleCHange}>
          Login
        </Button>
        <Button variant={"outline"} colorScheme='primary'>
          Sign Up
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;

const styles = StyleSheet.create({});
