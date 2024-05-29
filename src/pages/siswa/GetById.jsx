import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

function GetById() {
  const { nis } = useParams();
  const [siswa, setSiswa] = useState([]);

  const getSiswaById = async () => {
    const data = Cookies.get("authentication");
    const token = data.split(",");

    try {
      let response = await axios
        .get(`http://127.0.0.1:8000/api/siswa/${nis}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token[0],
          },
        })
        .then((res) => res.data);
      console.log(response);
      setSiswa(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getSiswaById();
  });

  return <div>GetById{siswa.nama}</div>;
}

export default GetById;
