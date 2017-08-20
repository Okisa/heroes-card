import React, {Component} from 'react';
import quizList from './quizList';
import Quiz from './Quiz';
import * as actions from './actions';
import { connect } from 'react-redux';
import CardView from '../cardView/CardView';
import './card.css';

let value;
let fullAnswer=" ";
class Card extends Component {

    constructor(props){
        super(props);

        this.state={
            question:'',
            index:0,
            quizIndex:0
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
                            <CardView/>
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