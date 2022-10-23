import { useState } from "react";
import { API } from "../helpers/API";

const useLaporan = () => {
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
  return { Laporan, handleCHange, handleSubmit };
};

export default useLaporan;

const styles = StyleSheet.create({});
