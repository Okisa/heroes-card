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

let value;
let fullAnswer=" ";
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
    incrementIndex(){
            console.log(this.state.quizIndex);
            this.fullAnswer = `${this.fullAnswer} ${this.value}`;
            console.log(this.fullAnswer);
        if(this.state.quizIndex<4)
        {
            this.setState({quizIndex:++this.state.quizIndex});
        }
        else{
            axios.get(`https://bluehack-heroes.mybluemix.net/api/heroes?name=Volverine&text=${this.fullAnswer}`)
                .then(response => {
                    localStorage.setItem('answer',response);
                    this.setState({
                        status1:Math.round(response.data[0].value),
                        status2:Math.round(response.data[1].value),
                        status3:Math.round(response.data[2].value),
                        status4:Math.round(response.data[3].value),
                        status5:Math.round(response.data[4].value),
                        hero:response.data[5].name
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
    render(){
        let quiz = quizList[this.state.quizIndex];
        return(
            <div className="container">
                <div className="container__header"></div>
                <div className="container__card-page">
                        <div className="container__quiz">
                            <Quiz List={quiz} updateAnswer={this.getAnswer.bind(this)}/>
                            <div className="button__div">
                                <button onClick={this.incrementIndex}>Criar Carta!</button>
                            </div>
                        </div>
                        <div className="container__card">
                            <div className="Status">
                                <label className="PlayerName">Teste</label>
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