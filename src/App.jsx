import React,{ useState, useEffect} from 'react';
import './App.css';
import Recipe from "./components/recipe";


function App() {

  
  
  const [recipes, setRecipes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [queryText, setQueryText] = useState("chicken");
  // const APP_ID = "e2c18384";
  // const APP_KEY = "114595fa909c95284509e6926fba1ff";

  
  
  
  
  useEffect(() => {
    getRecipes();
  }, [queryText])

  const handleClick = event => {
    event.preventDefault();
   if(inputText == ""){
      setQueryText("chicken")
    }else{
     setQueryText(inputText);
    }
    setInputText("");
     
  }
  
  const exampleReq = "https://api.edamam.com/api/recipes/v2?type=public&q=" + {queryText} + "&app_id=e2c18384&app_key=114595fa909c95284509e6926fba1ff7%09%E2%80%94";

  const getRecipes = async () => {
    const response = await fetch("https://api.edamam.com/api/recipes/v2?type=public&q=" + queryText + "&app_id=e2c18384&app_key=114595fa909c95284509e6926fba1ff7");
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  console.log(queryText)

  return (
    <main>
        <form onSubmit={handleClick} className='search-form'>
          <input type='text' value={inputText} className='search-input' onChange={e => setInputText(e.target.value)}/>
          <button type='submit' className='search-btn'>SEARCH</button>
        </form>
        
        <div className='recipe-display'>
          {recipes.map(responses => {
              
                  return(
                   
                      <Recipe name={responses.recipe.label} calore={responses.recipe.calories} image={responses.recipe.images.REGULAR.url} key={responses.recipe.calories} ingredient={responses.recipe.ingredients} />
    
          )

          })}
        </div>

    </main>
  );
}

export default App;

