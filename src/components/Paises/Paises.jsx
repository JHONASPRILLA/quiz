import React from "react";
import axios from "axios";
import "./Paises.css";
import { useState } from "react";
import { useEffect } from "react";

const Paises = () => {
  const [paisesInfo, setPaisesInfo] = useState([]);

  const fetchPaisesInfo = async () => {
    let response = await axios.get("https://restcountries.com/v3.1/all");
    console.log(response);
    setPaisesInfo(response.data);
  };
  useEffect(() => {
    fetchPaisesInfo();
  }, []);
  return (
    <table id="pais">
      <thead>
        <tr className="encabezado">
          <th>Name</th>
          <th>Region</th>
          <th>Ubicacion</th>
        </tr>
      </thead>
      <tbody>
        {
        paisesInfo.map((pais,index) => (
          <tr key={index} className="contenido">
            <td>{pais.name.common}</td>
            <td>{pais.region}</td>
            <td>{pais.maps.googleMaps}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Paises;
