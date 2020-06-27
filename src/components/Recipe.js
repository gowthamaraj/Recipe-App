import React from 'react';
import { Link } from "react-router-dom";


class Recipe extends React.Component{
    state = {
        activeRecipe: []
      }
      componentDidMount = async () => {
        const id = this.props.location.state.id;
        const req = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=a47fe57ee0ab45bb95725fe9627546f9&includeNutrition=true`);
        
        const res = await req.json();
        this.setState({ activeRecipe: res });
        console.log(this.state.activeRecipe)
      }
    render(){
        return (
            <div className="container">
            <header className="bg-dark text-center my-3">
            <h1 className="text-warning p-1">{this.props.location.state.title}</h1>
            </header>
            <div className="d-flex align-items-start my-2">
            <Link to="/"><button className="btn btn-info">
              Go Home
            </button></Link>
            </div>
            <div className="container" dangerouslySetInnerHTML={{ __html: this.state.activeRecipe.summary}}>
            </div>
            </div>
        )
    }
}

export default Recipe