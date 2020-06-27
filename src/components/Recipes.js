import React from 'react';
import { Link } from "react-router-dom";


class Recipes extends React.Component{

    render(){
        return (
            <div className="card-columns">
                {this.props.data.map((item)=>{
                    return(
                        <div className="card" key={item.id}>
                            <img className="card-img-top" src={`https://spoonacular.com/recipeImages/${item.image}`} alt={item.title} />
                            <div className="card-body">
                            <h4 className="card-title">{item.title}</h4>
                                <p className="card-text">
                                <span className="font-weight-bold">ReadyInMinutes</span> : {item.readyInMinutes}
                                <br/>
                                <span className="font-weight-bold">Servings</span> : {item.servings}
                                <br/>
                                <span className="font-weight-bold">Source</span> : {item.sourceUrl}
                                </p>
                                <Link to={{ pathname: `/recipe/${item.id}`,state: { title: item.title,id:item.id }}}><button href="#!" className="btn btn-primary text-white">View Recipe!</button></Link>
                            </div>
                        </div>
                    )
                })}
                </div>
        )
    }
}

export default Recipes