import { combineReducers } from 'redux';
import QuizFeatureReducer from './card/reducer';

const rootReducer = combineReducers({
    quizFeature: QuizFeatureReducer
});

export default rootReducer;