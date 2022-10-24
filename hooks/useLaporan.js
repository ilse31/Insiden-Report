import { useState } from "react";
import { API } from "../helpers/API";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";

const useLaporan = () => {
  const [Laporan, setLaporan] = useState({
    user_id: 1,
    foto: "",
    laporan: "",
    status: false,
  });
  const [foto, setFoto] = useState("");
  console.log(foto);
  const pickDocument = async () => {
    const config = {
      headers: {
        "Content-type": "multipart/form-data;",
      },
    };
    await DocumentPicker.getDocumentAsync({}).then((res) => {
      console.log("res", res.file);
      setFoto(res.file);
      console.log("ini foto", foto);
      const formDatas = new FormData();
      formDatas.append("foto", res.file);
      API.post("/upload", formDatas, config).then((res) => {
        console.log("datafoto", res.data.url);
        setLaporan({ ...Laporan, foto: res.data.url });
      });
    });

    // setTimeout(() => {
    //   setFoto(result.file);
    //   console.log("foto data");
    //
    // }, 2000);
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
