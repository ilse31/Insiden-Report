import React, { useState } from "react";
import { Box, VStack, FormControl, Input, Button, Text } from "native-base";
import { API } from "../helpers/API";

const AddLaporan = () => {
  const [Laporan, setLaporan] = useState({
    foto: "",
    deskripsi: "",
  });

  // eventt handler
  const handleCHange = (key, value) => {
    setLaporan({ ...Laporan, [key]: value });
  };

  const handleSubmit = () => {
    API.post("/laporan", Laporan)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box flex={1} safeArea p={5} justifyContent='center'>
      <Text>AddLaporan</Text>
      <VStack space={3}>
        <VStack space='5'>
          <FormControl isRequired isInvalid>
            <FormControl.Label>Foto</FormControl.Label>
            <Input
              onChangeText={(value) => handleCHange("foto", value)}
              type='text'
              key='foto'
              p={2}
              placeholder='Masukkan Username'
            />
            <FormControl.HelperText>
              We'll keep this between us.
            </FormControl.HelperText>
            <FormControl.ErrorMessage>{""}</FormControl.ErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid>
            <FormControl.Label>Deskripsi Foto</FormControl.Label>
            <Input
              key='deskripsi'
              onChangeText={(value) => handleCHange("deskripsi", value)}
              type='text'
              p={2}
              placeholder='Masukkan Deskripsi Foto'
            />
            <FormControl.ErrorMessage>{""}</FormControl.ErrorMessage>
          </FormControl>
        </VStack>
        <VStack space={5}>
          {Laporan.foto && Laporan.deskripsi ? (
            <Button variant={"solid"} colorScheme='primary'>
              Tambah Laporan
            </Button>
          ) : (
            <Button variant={"outline"} colorScheme='primary' disabled>
              Tambah Laporan
            </Button>
          )}
        </VStack>
      </VStack>
    </Box>
  );
};

export default AddLaporan;
