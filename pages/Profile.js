import { Box, Text } from "native-base";
import React from "react";
import useProfile from "../hooks/useProfile";
const Profile = () => {
  const { profile, isLoading } = useProfile();
  console.log(profile);
  return (
    <Box safeArea p={5}>
      <Text>Profile</Text>
    </Box>
  );
};

export default Profile;
