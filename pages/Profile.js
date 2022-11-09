import { Box, Text } from "native-base";
import React from "react";
import useProfile from "../hooks/useProfile";
const Profile = () => {
  const { profile, isLoading } = useProfile();
  console.log(profile);
  return (
    <Box safeArea p={5} flex={1}>
      <Text>Profile</Text>
      <Box flex={1} justifyContent='center' marginTop={20}>
        <Box justifyContent={"space-between"} flexDirection={"row"} flex={1}>
          <Box>
            <Text>Nama</Text>
            <Text>Username</Text>
            <Text>Email</Text>
          </Box>
          <Box>
            <Text>{profile.name}</Text>
            <Text>{profile.username}</Text>
            <Text>Email {profile.email}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
