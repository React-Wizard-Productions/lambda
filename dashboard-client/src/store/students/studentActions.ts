import {createAction, createNoPayloadAction} from "../storeTypes";
import {Student, StudentActions, StudentTypes} from "./studentTypes";

export const loadStudents = () => (dispatch: (arg0: StudentActions) => void, getState: any, api: { students: { loadStudents: () => Promise<any>; }; }) => {
    dispatch(fetchStartAction())
    api.students.loadStudents().then(students => dispatch(fetchSuccessAction(students))).catch(err => dispatch(fetchErrorAction(err)))
}

const fetchStartAction = (): StudentActions => createNoPayloadAction(StudentTypes.FETCH_STUDENTS_START)
const fetchSuccessAction = (students: Student[]): StudentActions => createAction(StudentTypes.FETCH_STUDENTS_SUCCESS, students)
const fetchErrorAction = (error: Error): StudentActions => createAction(StudentTypes.FETCH_STUDENTS_FAILURE, error)
