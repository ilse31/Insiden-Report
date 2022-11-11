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
  const [fotos, setFotos] = useState(null);

  const pickDocument = async () => {
    // const config = {
    //   headers: {
    //     "Content-type": "multipart/form-data;",
    //   },
    // };

    const res = await DocumentPicker.getDocumentAsync({
      type: "image/*",
      multiple: true,
      copyToCacheDirectory: false,
    });
    console.log(res);
    if (!res.cancelled) {
      setFotos({ foto: res });
      setLaporan({ ...Laporan, foto: res.uri });
    }

    // const blobs = await res.blob();
    // console.log(blobs);
    // const formData = new FormData();
    // formData.append("foto", res);

    // API.post("/upload", { res }, config)
    //   .then((res) => {
    //     console.log(res.data);
    //     setFotos({
    //       foto: res.data,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log("Api call error");
    //   });
    // console.log("res", resFoto.data);
    // setLaporan({ ...Laporan, foto: resFoto.data.data });

    //   console.log("res", res.file);
    //   setFotos({ foto: res.file });
    //   if (fotos) {
    //     console.log("dataaaa", JSON.stringify(res));
    //     const formDatas = new FormData();
    //     formDatas.append("foto", res.file);
    //     const upload = await API.post("/upload", formDatas, config);
    //     console.log("datafoto", upload);
    //     // setLaporan({ ...Laporan, foto: res.data.url });
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    // const formDatas = new FormData();
    // formDatas.append("foto", res.file);
    // API.post("/upload", formDatas, config).then((res) => {
    //   console.log("datafoto", res.data.url);
    //   setLaporan({ ...Laporan, foto: res.data.url });
    // });

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
  return { Laporan, handleCHange, handleSubmit, pickDocument, fotos };
};

export default useLaporan;
