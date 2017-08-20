import React, {Component} from 'react';
import quizList from './quizList';
import Quiz from './Quiz';
import * as actions from './actions';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
import CardView from '../cardView/CardView';
import './card.css';
import axios from 'axios';
import YourCard from '../images/template_card.jpg';
import {Link} from 'react-router';

let value;
let fullAnswer=" ";
let fname="";

class Card extends Component {

    constructor(props){
        super(props);

        this.state={
            question:'',
            index:0,
            quizIndex:0,
            status1:'',
            status2:'',
            status3:'',
            status4:'',
            status5:'',
            hero:'',
            name:''
        };

        this.incrementIndex = this.incrementIndex.bind(this);

    }
    componentWillMount(){
       
    }
    incrementIndex(event){
            console.log(this.state.quizIndex);
            this.fullAnswer = `${this.fullAnswer} ${this.value}`;
            console.log(this.fullAnswer);
        if(this.state.quizIndex==0){
            console.log(fname);
            this.setState({name:fname});
        }
        if(this.state.quizIndex<6)
        {
            this.setState({quizIndex:++this.state.quizIndex});
        }
        else{
            alert("Aguarde! Watson está medindo suas forças!");
            axios.get(`https://bluehack-heroes.mybluemix.net/api/heroes?name=Volverine&text=${this.fullAnswer}`)
                .then(response => {
                    localStorage.setItem('answer',response);
                    this.setState({
                        status1:Math.round(response.data[0].value),
                        status2:Math.round(response.data[1].value),
                        status3:Math.round(response.data[2].value),
                        status4:Math.round(response.data[3].value),
                        status5:Math.round(response.data[4].value),
                        hero:response.data[6].heroi
                    });
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
            
        }
    }

    getAnswer(value){
        console.log(value);
        this.value=value;
    }

    saveName(event){
        fname=event.target.value;
    }


    render(){
        let quiz = quizList[this.state.quizIndex-1];
        return(
            <div className="container">
                <div className="container__header"> <Link className="HomeLink" to='/'>Watson Super Hero</Link></div>
                <div className="container__card-page">
                        <div className="container__quiz">
                            {
                                this.state.index++==0? 
                                    <div>
                                        <p className="InitialName">Digite o seu nome!</p>
                                        <input className="HeroName" type="text" value={this.getName} onChange={this.saveName}/>
                                    </div>:
                                    this.state.index>6?
                                    <div>
                                        <h1 className="FinalTitle">Apenas clique no botão abaixo e pronto, sua carta novinha! --></h1>
                                    </div>
                                
                                :<Quiz List={quiz} updateAnswer={this.getAnswer.bind(this)}/>
                            }
                            <div className="button__div">
                                <button onClick={this.incrementIndex}>{this.state.quizIndex<6?"Next": "Criar Carta!"}</button>
                            </div>
                        </div>
                        <div className="container__card">
                            <div className="Status">
                                <label className="PlayerName">{this.state.name}</label>
                                <div className="StatusPlayer">
                                    <label className="StatusOne">{this.state.status1}</label>
                                    <label className="StatusTwo">{this.state.status2}</label>
                                    <label className="StatusThree">{this.state.status3}</label>
                                    <label className="StatusFour">{this.state.status4}</label>
                                    <label className="StatusFive">{this.state.status5}</label>
                                </div>
                                <label className="YourHero">{this.state.hero}</label>
                            </div>
                            <img className="YourCard_right" src={YourCard} alt=""/>
                        </div>
                </div>
            </div> 
        );
    }
}

// function mapStateToProps(state) {
//     return { quizId: state.quizFeature.quizId };

// }
export default (Card);