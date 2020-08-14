import {createAction, createNoPayloadAction} from "../storeTypes";
import {Student, StudentActions, StudentTypes} from "./studentTypes";

export const loadStudents = () => (dispatch: (arg0: StudentActions) => void, getState: any, api: {  loadStudents: () => Promise<Student[]>; }) => {
    dispatch(fetchStartAction())
    api.loadStudents().then(students => dispatch(fetchSuccessAction(students))).catch(err => dispatch(fetchErrorAction(err)))
}

export const addStudent = (student: Partial<Student>) => (dispatch: (arg0: StudentActions) => void, getState: any, api: { addStudent: (arg0: Partial<Student>) => Promise<Student>; }) => {
    dispatch(addStartAction())
    api.addStudent(student).then(student => dispatch(addSuccessAction(student))).catch(err => dispatch(addErrorAction(err)))
}

const fetchStartAction = (): StudentActions => createNoPayloadAction(StudentTypes.FETCH_STUDENTS_START)
const fetchSuccessAction = (students: Student[]): StudentActions => createAction(StudentTypes.FETCH_STUDENTS_SUCCESS, students)
const fetchErrorAction = (error: Error): StudentActions => createAction(StudentTypes.FETCH_STUDENTS_FAILURE, error)

const addStartAction = (): StudentActions => createNoPayloadAction(StudentTypes.ADD_STUDENTS_START)
const addSuccessAction = (student: Student): StudentActions => createAction(StudentTypes.ADD_STUDENTS_SUCCESS, student)
const addErrorAction = (error: Error): StudentActions => createAction(StudentTypes.ADD_STUDENTS_FAILURE, error)
