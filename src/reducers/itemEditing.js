import * as types from './../constants/ActionTyles';

var initialState = {
		id : '',
		name : '',
		status : false
}; //close form

var myReducer = (state = initialState, action) =>{
	switch(action.type){
		case types.EDIT_TASK:
			return action.task;		
		default: return state;
	}
};

export default myReducer;