import React, {Component} from 'react';
import quizList from './quizList';
import './quiz.css';

class Quiz extends Component {

    constructor(props){
        super(props);
        this.state={string:"", checked:false, selectedOption:""};

        this.checkChange = this.checkChange.bind(this);
        this.isChecked = this.isChecked.bind(this);

    }

    formSubmit(event){
        event.preventDefault();
    }
    checkChange(event){
        console.log(event.target);
        this.setState({selectedOption:event.target.value});
        this.props.updateAnswer(event.target.value);
    }

    isChecked(value){
        return value === this.state.selectedOption;
    }

    render(){
        
        return(
            <div className="container">
                <div  className="quiz__form"  >
                    <ul className="form__list" >
                        <li>{this.props.List.id} - {this.props.List.question}</li>    
                        <li><label><input type="radio" name={this.props.List.id} value={this.props.List.answerA} onChange={this.checkChange} checked={this.isChecked(this.props.List.answerA)} />{this.props.List.optionA}</label></li>    
                        <li><label><input type="radio" name={this.props.List.id} value={this.props.List.answerB} onChange={this.checkChange} checked={this.isChecked(this.props.List.answerB)}/>{this.props.List.optionB}</label></li>    
                        <li><label><input type="radio" name={this.props.List.id} value={this.props.List.answerC} onChange={this.checkChange} checked={this.isChecked(this.props.List.answerC)}/>{this.props.List.optionC}</label></li>    
                        <li><label><input type="radio" name={this.props.List.id} value={this.props.List.answerD} onChange={this.checkChange} checked={this.isChecked(this.props.List.answerD)}/>{this.props.List.optionD}</label></li>        
                    </ul>                
                              
                </div>
            </div> 
        );
    }
}

export default Quiz;