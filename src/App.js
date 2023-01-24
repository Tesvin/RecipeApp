import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import "./App.css";
import Gallery from "./components/Gallery";

function App() {
  let [endPoint, setEndPoint] = useState("");
  let [container, setContainer] = useState([]);

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "a341921e01msh06705c8228a50b8p1c874bjsnb51333fe1d85",
  //     "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  //   },
  // };

  useEffect(() => {
    const API_URL = `https://api.spoonacular.com/food/site/search?query=`;

    if (endPoint) {
      const fetchData = async () => {
        const response = await fetch(
          API_URL + endPoint + "&apiKey=" + process.env.REACT_APP_API_KEY
        );
        const resData = await response.json();
        if (resData.Recipes?.length > 0) {
          setContainer(resData.Recipes);
          document.title = `${endPoint} recipe`;
          console.log(resData.Recipes);
        } else {
          window.alert("Not Found");
        }
      };
      fetchData();
    }
  }, [endPoint]);

  // const onChangeHandler = (e) => {
  //   setEndPoint(e.target.value);
  // };

  const submitHandler = (e, endPoint) => {
    e.preventDefault();
    setEndPoint(endPoint);
    e.target.reset();
  };

  const clearData = () => {
    setContainer([]);
  };

  return (
    <div className="App ">
      <div className="mt-6">
        <SearchBar submitHandler={submitHandler} clearData={clearData} />
      </div>
      {/* <h1 className="text-4xl mt-6 mb-8">Search For Any Recipe</h1> */}
      <div>
        <Gallery container={container} endPoint={endPoint}/>
      </div>
    </div>
  );
}

export default App;
