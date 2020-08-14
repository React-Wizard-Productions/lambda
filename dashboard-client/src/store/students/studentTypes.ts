import {Action, NoPayloadAction} from "../storeTypes";

export enum StudentTypes {
    FETCH_STUDENTS_START = "FETCH_STUDENTS_START",
    FETCH_STUDENTS_SUCCESS = "FETCH_STUDENTS_SUCCESS",
    FETCH_STUDENTS_FAILURE = "FETCH_STUDENTS_FAILURE",
    ADD_STUDENTS_START = "ADD_STUDENTS_START",
    ADD_STUDENTS_SUCCESS = "ADD_STUDENTS_SUCCESS",
    ADD_STUDENTS_FAILURE = "ADD_STUDENTS_FAILURE",
}

export interface Student {
    id: string
    firstName: string
    lastName: string
    github: string
    weekend: string
}

export interface StudentState {
    students: Student[],
    isLoading: boolean,
    errors: Error | null
}

type FetchStudentsStartAction = NoPayloadAction<typeof StudentTypes.FETCH_STUDENTS_START>
type FetchStudentsSuccessAction = Action<typeof StudentTypes.FETCH_STUDENTS_SUCCESS, Student[]>
type FetchStudentsErrorAction = Action<typeof StudentTypes.FETCH_STUDENTS_FAILURE, Error>

type AddStudentsStartAction = NoPayloadAction<typeof StudentTypes.ADD_STUDENTS_START>
type AddStudentsSuccessAction = Action<typeof StudentTypes.ADD_STUDENTS_SUCCESS, Student>
type AddStudentsErrorAction = Action<typeof StudentTypes.ADD_STUDENTS_FAILURE, Error>


export type StudentActions =
    FetchStudentsErrorAction
    | FetchStudentsStartAction
    | FetchStudentsSuccessAction
    | AddStudentsErrorAction
    | AddStudentsStartAction
    | AddStudentsSuccessAction
