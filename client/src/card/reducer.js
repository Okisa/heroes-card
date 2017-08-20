import {CHANGE_ID} from './type';

export default function (state={quizId:null},action){
   
    switch(action.type){
        case CHANGE_ID:
            return{...state, quizId:1};
 
    }
    return state;
}