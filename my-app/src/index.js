import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const colors = ['red', 'blue', 'green', 'yellow', 'white'];

class Card extends React.Component{

    
    constructor(props){
        super(props);
        this.state = {
            color : "white"
        };
    }

    getRandomColor() {
        const diffColors = colors.filter(color => color !== this.state.color);
        const randomColorIndex = Math.floor(Math.random() * diffColors.length);
        return diffColors[randomColorIndex];
    }

    handleClick(){
        this.setState(({ color }) => ({
            color:  this.getRandomColor()
          }));
    }

    render(){

        return (            
            <div class="carte" style={{ backgroundColor: this.state.color }}>
                <img class="image" src={process.env.PUBLIC_URL + '/'+this.props.value.imageP } /> 
                <h2>{this.props.value.prenom} {this.props.value.nom}</h2>
                <p>{this.props.value.dateN}</p>
                <button type="button" onClick={() => this.handleClick()} class="btn btn-outline-primary">Changer thème</button>
            </div>

            
        );
    }
}

class Post extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items : [],
        };
    }
   
    refresh(){
        this.state.items = new Array();
        for (let i = 0; i < this.props.value.length; i++) {
            this.state.items.push(<p>{this.props.value[i].contenu} </p>) 
            this.state.items.push( <button type="button" onClick={() => this.handleClick(i)} class="btn btn-outline-primary">Like 👍</button>)
            this.state.items.push( <p>{this.props.value[i].like}</p>)
        }
    }


    handleClick(i){
        this.props.value[i].like++;
        this.state.items[i*3] = "<p>" + this.state.items[i*3]+1 + "</p>" ;
        this.refresh();
    }

    render(){
        this.refresh();
        return (            
            <div class="post">
                <h2>Posts</h2>
                {this.state.items}
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
                  imageP : "jeanne.jpg",
                  posts : [{contenu : "J'adore les chips",like : 0},{contenu : "J'adore les petites filles, trop mimi",like : 0},{contenu : "Hier soir, je suis parti au parc astérix Trop le fun",like : 0}]
                },
                {
                  prenom: "Martine",
                  nom : "Gomez",
                  dateN : "10/02/1950",
                  imageP : "martine.jpg",
                  posts : [{contenu : "Bonsoir tt le monde",like : 0},{contenu : "Je rejoins facebook version wish",like : 0},{contenu : "Trop bien",like : 0}]
                },
                {
                  prenom: "Claude",
                  nom : "Francesco",
                  dateN : "15/09/1990",
                  imageP : "claude.jpg",
                  posts : [{contenu : "Je suis trop beau",like : 0},{contenu : "Je suis à dalas",like : 0},{contenu : "Les chiens c'est cool",like : 0}]
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
                 <h1 class="titre">FACEBOOK</h1>,
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