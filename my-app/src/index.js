import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Card extends React.Component{
    render(){
        return (            
            <div class="card">
                <h2>{this.props.value.prenom} {this.props.value.nom}</h2>
                <p>{this.props.value.dateN}</p>
            </div>

            
        );
    }
}

class Post extends React.Component{

    
   

    handleClick(i){
        this.props.value[i].like = this.props.value[i].like +1 ;
    }

    render(){
        const items = [];
        for (let i = 0; i < this.props.value.length; i++) {
            items.push(<p>{this.props.value[i].contenu} </p>) 
            items.push( <button type="button" onClick={() => this.handleClick(i)} class="btn btn-outline-primary">Like 👍</button>)
            items.push( <p>{this.props.value[i].like}</p>)

        }
        return (            
            <div class="">
                {items}
            </div>

            
        );
    }
}

class Page extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            profils : 
            [
                {
                  prenom: "Jeanne",
                  nom : "Dubois",
                  dateN : "11/05/1998",
                  imageP : "",
                  posts : [{contenu : "J'adore les chips",like : 0},{contenu : "J'adore les petites filles, trop mimi",like : 0},{contenu : "Hier soir, je suis parti au parc astérix Trop le fun",like : 0}]
                },
                {
                  prenom: "Martine",
                  nom : "",
                  dateN : "",
                  imageP : "",
                  posts : [{contenu : "wsh la street",like : 0},{contenu : "wsh la street",like : 0},{contenu : "wsh la street",like : 0}]
                },
                {
                  prenom: "Claude",
                  nom : "",
                  dateN : "",
                  imageP : "",
                  posts : [{contenu : "wsh la street",like : 0},{contenu : "wsh la street",like : 0},{contenu : "wsh la street",like : 0}]
                }
            ],
            numProfil : 0,
        };
    }

    handleClick(i) {
        this.setState({
            numProfil: i,
        });
    }
    
    
    showProfile(){
        const items = [];
        for (let i = 0; i < this.state.profils.length; i++) {
            items.push(<button type="button" onClick={() => this.handleClick(i)} class="btn btn-outline-primary col">{this.state.profils[i].prenom}</button>)
        }
        return items;
    }

    render(){
        return (            
            <div class="container">
                <div class="row">
                    {this.showProfile()}
                </div>

            <Card value={this.state.profils[this.state.numProfil]} /> 
            <Post value={this.state.profils[this.state.numProfil].posts} />

            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Page />,
    document.getElementById('root')
  );