import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';
import Gallery from './components/Gallery';

function App() {

  let [endPoint, setEndPoint] = useState("");
  let [container, setContainer] = useState([]);
  let [message, setMessage] = useState("")

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a341921e01msh06705c8228a50b8p1c874bjsnb51333fe1d85",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  useEffect(() => {
      fetchMe()
      document.title = `${endPoint}`
    
  }, [endPoint]);

  const fetchMe = () => {
    //   fetch(
    //     `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${endPoint}`,
    //     options
    //  )
    // fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5&ignorePantry=true&ranking=1', options)
      fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${endPoint}`, options)
       .then(response => {
        return response.json()
      })
      .then(data => {
        setContainer(data)
        // if(data.results.length > 0){
        //   setContainer(data.results);
        // }else {
        //   setMessage("Content not found")
        // }
        console.log(data)
      })
      
      .catch(err => {
        console.error(err)
      })
      
  };

  // const onChangeHandler = (e) => {
  //   setEndPoint(e.target.value);
  // };  

  const submitHandler = (e, term) => {
    e.preventDefault();
    setEndPoint(term);
  };


  return (
    <div className="App">
      <h1>Search For Any Recipe</h1>
     <SearchBar submitHandler={submitHandler}/>
     {message}
     <div>
      <Gallery container={container}/>
     </div>
     {/* {container.map((item) => {
      const { id, title, image, nutrition } = item
      return (
        <div key={id}>
          <h1>{title}</h1>
          <h1>{nutrition}</h1>
          <img src={image}
          alt="recipeImage"
          />
        </div>
      )
     })} */}
    </div>
  );
}

export default App;
