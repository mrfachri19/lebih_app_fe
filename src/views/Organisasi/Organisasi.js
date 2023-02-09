import React, { useEffect, useState } from "react";
import { getListRestaurant } from "../../api";
import { useHistory } from "react-router-dom";
import food1 from "../../assets/img/shop.jpg";
import food2 from "../../assets/img/food-2.png";
import food3 from "../../assets/img/Chickenwings.png";
import OrderForms from "./OrderForms";

function Organisasi() {
  const history = useHistory();
  const [dataResto, setDataResto] = useState([]);
  function getRestaurant() {
    getListRestaurant().then((res) => {
      var tempList = [];
      tempList = res.data.data;
      console.log("List Data => ", tempList);
      setDataResto(tempList);
    });
  }

  useEffect(() => {
    getRestaurant();
  }, []);

  return (
    <>
      <OrderForms />
  
    </>
  );
}

export default Organisasi;
