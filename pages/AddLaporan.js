import React from "react";
import { Box, VStack, FormControl, Input, Button, Text } from "native-base";
import useLaporan from "../hooks/useLaporan";
import { Image } from "react-native";

const AddLaporan = () => {
  const { handleCHange, handleSubmit, Laporan, pickDocument, fotos } =
    useLaporan();

  return (
    <Box flex={1} safeArea p={5} justifyContent='center'>
      <Text>AddLaporan</Text>
      <VStack space={3}>
        <VStack space='5'>
          <FormControl isRequired isInvalid>
            <FormControl.Label>Foto</FormControl.Label>
            <Box backgroundColor={"primary.700"}>
              <Button onPress={pickDocument}>Upload Foto</Button>
            </Box>
            <FormControl.HelperText>
              We'll keep this between us.
            </FormControl.HelperText>
            <FormControl.ErrorMessage>{""}</FormControl.ErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid>
            <FormControl.Label>Deskripsi Foto</FormControl.Label>
            <Input
              key='laporan'
              onChangeText={(value) => handleCHange("laporan", value)}
              type='text'
              p={2}
              placeholder='Masukkan Deskripsi Foto'
            />
            <FormControl.ErrorMessage>{""}</FormControl.ErrorMessage>
          </FormControl>
        </VStack>
        <VStack space={5}>
          {Laporan.foto && Laporan.laporan ? (
            <Button
              variant={"solid"}
              onPress={handleSubmit}
              colorScheme='primary'>
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
