import axios from "axios";
import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import "./App.scss";
import Card from "./components/Card/Card";

function App() {
  const [allData, setAllData] = useState([]);

  const dataUrl = "https://jsonplaceholder.typicode.com/users";
  const imagesDataUrl = "https://jsonplaceholder.typicode.com/photos";
  const getData = async () => {
    try {
      const resData = await axios.get(dataUrl);
      const resImagesData = await axios.get(imagesDataUrl);
      axios
        .all([resData.data, resImagesData.data.slice(0, resData.data.length)])
        .then(
          axios.spread((...allData) => {
            const zippedData = allData[0].map((obj, i) => [obj, allData[1][i]]);
            setAllData(zippedData);
          })
        );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  //allData.length && console.log(allData.map((arr) => arr[0].address));
  return (
    <div className="App">
      {allData.length &&
        allData.map((arr) => {
          const entries = Object.entries(arr[0].address);
          const addressParts = entries.map((addressInfo) => addressInfo[1]);
          addressParts.pop();
          const addressString = addressParts.join(" ");
          return (
            <Card
              key={uuid()}
              imgSrc={arr[1].url}
              userName={arr[0].name}
              email={arr[0].email}
              phone={arr[0].phone}
              website={arr[0].website}
              address={addressString}
            />
          );
        })}
    </div>
  );
}

export default App;
