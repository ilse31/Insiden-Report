import React from "react";
import { Box, VStack, FormControl, Input, Button, Heading } from "native-base";
import useLogin from "../hooks/useLogin";

const Login = ({ navigation }) => {
  const { handleCHange, login, errors, handleSubmit } = useLogin(navigation);

  return (
    <Box safeArea p='5' flex={1} justifyContent='center'>
      <Heading>Login</Heading>
      {/* Ini form */}
      <VStack space={3}>
        <VStack space='5'>
          <FormControl key={"username"} isRequired isInvalid>
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
            <FormControl.ErrorMessage>
              {errors.username}
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid key={"password"}>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              key='password'
              onChangeText={(value) => handleCHange("password", value)}
              type='password'
              p={2}
              placeholder='Masukkan Password'
            />
            <FormControl.ErrorMessage>
              {errors.password}
            </FormControl.ErrorMessage>
          </FormControl>
        </VStack>
        <VStack space={5}>
          {login.username && login.password ? (
            <Button
              variant={"solid"}
              onPressIn={handleSubmit}
              colorScheme='primary'>
              Login
            </Button>
          ) : (
            <Button
              variant={"outline"}
              onPress={handleSubmit}
              colorScheme='primary'
              disabled>
              Login
            </Button>
          )}
          <Button
            variant={"outline"}
            colorScheme='primary'
            onPress={() => navigation.navigate("Register")}>
            Sign Up
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Login;
