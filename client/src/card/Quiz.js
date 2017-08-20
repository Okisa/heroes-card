import React, {Component} from 'react';
import quizList from './quizList';
import './quiz.css';

class Quiz extends Component {

    constructor(props){
        super(props);

    }

    formSubmit(event){
        event.preventDefault();
    }

    render(){
        return(
            <div className="container">
                <div  className="quiz__form"  >
                    <ul className="form__list">
                        <li>{this.props.List.id} - {this.props.List.question}</li>    
                        <li><input type="radio" name={this.props.List.id} value={this.props.List.value} checked/>{this.props.List.optionA}</li>    
                        <li><input type="radio" name={this.props.List.id} value={this.props.List.value} />{this.props.List.optionB}</li>    
                        <li><input type="radio" name={this.props.List.id} value={this.props.List.value} />{this.props.List.optionC}</li>    
                        <li><input type="radio" name={this.props.List.id} value={this.props.List.value} />{this.props.List.optionD}</li>        
                    </ul>                
                              
                </div>
            </div> 
        );
    }
}

export default Quiz;