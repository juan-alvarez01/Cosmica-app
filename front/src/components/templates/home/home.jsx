import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import MainLayout from '../../layout/MainLayout';
import GameList from '../../cards/CardList';
import '../../cards/Cards.css';


const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Lista de productos:", data);
          setProductList(data);
        } else {
          console.error("Error al obtener la lista de productos desde la API");
        }
      } catch (error) {
        console.error("Error de red:", error);
      }
    };

    fetchData();

  }, []);

  const serch = searchParams.get('q');

  return (
    <MainLayout>
      <GameList games={productList} />
    </MainLayout>
  );
};

export default Home;
