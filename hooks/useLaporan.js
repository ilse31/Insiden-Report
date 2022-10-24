import { useState } from "react";
import { API } from "../helpers/API";
import * as ImagePicker from "expo-image-picker";

const useLaporan = () => {
  const [Laporan, setLaporan] = useState({
    user_id: 1,
    foto: "",
    laporan: "",
    status: false,
  });
  const [foto, setFoto] = useState();

  const pickDocument = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (result.cancelled) {
      return;
    }
    let localUri = result.uri;
    let filename = localUri.split("/").pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    if (!result.cancelled) {
      setFoto(result.uri);
    }
    const config = {
      headers: {
        "Content-type":
          "multipart/form-data; boundary=" +
          Math.random().toString().substring(2),
        Accept: "*/*",
      },
    };
    setTimeout(() => {
      console.log("foto data", filename);
      const formDatas = new FormData();
      formDatas.append("foto", { uri: localUri, name: filename, type });
      API.post("/upload", formDatas, config)
        .then((res) => {
          console.log("datafoto", res.data);
        })
        .catch((error) => {
          console.log("error", error);
        })
        .finally(() => {
          console.log("selesai");
        });
    }, 2000);
  };

  // eventt handler
  const handleCHange = (key, value) => {
    setLaporan({ ...Laporan, [key]: value });
  };

  const handleSubmit = () => {
    API.post("/laporan", Laporan)
      .then((res) => {
        console.log(res.data);
        setLaporan({
          ...Laporan,
          foto: "",
          laporan: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setLaporan({
          ...Laporan,
          foto: "",
          laporan: "",
        });
      });
  };
  return { Laporan, handleCHange, handleSubmit, pickDocument, foto };
};

export default useLaporan;
