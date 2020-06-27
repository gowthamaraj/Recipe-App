import React from 'react';
import './App.css';
import Recipes from "./components/Recipes";
import Form from "./components/Form";

class App extends React.Component {

  state = {
    recipes : []
  }

  getRecipes = async (e)=>{
    e.preventDefault();
    const recipeName = e.target.recipeName.value.trim();
    const api_call = await fetch(`https://api.spoonacular.com/recipes/search?apiKey=a47fe57ee0ab45bb95725fe9627546f9&query=${recipeName}`);
    const data = await api_call.json();
    this.setState({ recipes: data.results });
  }
  
  render(){
    return (
    <div>
      <header className="bg-dark text-center my-3">
      <h1 className="text-warning p-1">Find Your Recipe</h1>
      </header>
      <Form getRecipes={this.getRecipes}/>
      <hr/>
      <Recipes data={this.state.recipes}/>
    </div>
  );
  }
  
}

export default App;
