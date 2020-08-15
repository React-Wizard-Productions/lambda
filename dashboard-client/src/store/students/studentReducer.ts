import {StudentActions, StudentState, StudentTypes} from "./studentTypes";
import {Reducer} from "redux";

const initialState: StudentState = {
    students: [],
    isLoading: false,
    errors: null
}

const studentReducer: Reducer<StudentState, StudentActions> = (state = initialState, action) => {
    switch (action.type) {
        case StudentTypes.FETCH_STUDENTS_START:
            return {...state, isLoading: true}
        case StudentTypes.FETCH_STUDENTS_SUCCESS:
            return {...state, isLoading: false, students: action.payload}
        case StudentTypes.FETCH_STUDENTS_FAILURE:
            return {...state, isLoading: false, errors: action.payload}
        case StudentTypes.ADD_STUDENTS_START:
            return {...state, isLoading: true}
        case StudentTypes.ADD_STUDENTS_SUCCESS:
            return {...state, isLoading: false, students: [...state.students, action.payload]}
        case StudentTypes.ADD_STUDENTS_FAILURE:
            return {...state, isLoading: false, errors: action.payload}
        case StudentTypes.UPDATE_STUDENTS_START:
            return {...state, isLoading: true}
        case StudentTypes.UPDATE_STUDENTS_SUCCESS:
            return {...state, isLoading: false, students: state.students.map(student => {
                if (student.id === action.payload.id) {
                    return action.payload
                } else {
                    return student;
                }
                })}
        case StudentTypes.UPDATE_STUDENTS_FAILURE:
            return {...state, isLoading: false, errors: action.payload}
        case StudentTypes.DELETE_STUDENTS_START:
            return {...state, isLoading: true}
        case StudentTypes.DELETE_STUDENTS_SUCCESS:
            return {...state, isLoading: false, students: state.students.filter(student => student.id !== action.payload)}
        case StudentTypes.DELETE_STUDENTS_FAILURE:
            return {...state, isLoading: false, errors: action.payload}
        default:
            return state;
    }
}

export default studentReducer;
