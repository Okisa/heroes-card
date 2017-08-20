import React, {Component} from 'react';
import quizList from './quizList';
import Quiz from './Quiz';
import * as actions from './actions';
import { connect } from 'react-redux';
import './card.css';

class Card extends Component {

    constructor(props){
        super(props);

        this.state={
            question:'',
            index:0
        };

    }
    componentWillMount(){
       
    }
    render(){
        
        return(
            <div className="container">
                <div className="container__header"></div>
                <div className="container__card-page">
                        <div className="container__quiz">
                            {
                                quizList.map((quiz)=>{

                                return(<Quiz List={quiz} Index={quiz.id}/>)
                                })

                            }
                        <div className="button__div">
                            <button>Criar Carta!</button>
                        </div>
                        </div>
                        <div className="container__card">
                        </div>
                </div>
            </div> 
        );
    }
}

// function mapStateToProps(state) {
//     return { quizId: state.quizFeature.quizId };
// }

export default  (Card);